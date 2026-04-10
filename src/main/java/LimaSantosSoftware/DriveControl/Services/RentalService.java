package LimaSantosSoftware.DriveControl.Services;

import LimaSantosSoftware.DriveControl.DTO.RentalDTO;
import LimaSantosSoftware.DriveControl.Mapper.RentalMapper;
import LimaSantosSoftware.DriveControl.models.Rental;
import LimaSantosSoftware.DriveControl.models.Vehicle;
import LimaSantosSoftware.DriveControl.repository.RentalRepository;
import LimaSantosSoftware.DriveControl.repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class RentalService {

    private RentalRepository rentalRepository;
    private RentalMapper rentalMapper;
    private VehicleRepository vehicleRepository;


    @Autowired
    public RentalService(RentalMapper rentalMapper, RentalRepository rentalRepository, VehicleRepository vehicleRepository) {
        this.rentalMapper = rentalMapper;
        this.rentalRepository = rentalRepository;
        this.vehicleRepository = vehicleRepository;
    }


    // logic to show all Rentals
    public List<RentalDTO> show_All_Rentals() {
        List<Rental> rentals = rentalRepository.findAll();
        return rentals.stream()
                .map(rentalMapper::map)
                .collect(Collectors.toList());

    }

    // show rental for id
    public RentalDTO show_all_rental_by_id(Long id) {
        Optional<Rental> RentalPorId = rentalRepository.findById(id);
        return RentalPorId.map(rentalMapper::map).orElse(null);
    }

    //register rental
    public RentalDTO register_Rental(RentalDTO rentalDTO) {
        validateConflict(rentalDTO, null);

        // Block new ACTIVE rental for vehicles in MAINTENANCE
        if ("ACTIVE".equalsIgnoreCase(rentalDTO.getStatus())) {
            blockIfMaintenance(rentalDTO.getVehicleId());
        }

        Rental rental = rentalMapper.map(rentalDTO);
        rental = rentalRepository.save(rental);

        // Set vehicle status to RENTED when rental is ACTIVE
        if (rental.getStatus() == Rental.RentalStatus.ACTIVE) {
            updateVehicleStatus(rental.getVehicle().getId(), Vehicle.VehicleStatus.RENTED);
        }

        return rentalMapper.map(rental);

    }

    //change rental for id
    public RentalDTO ChangeDriverById(Long id, RentalDTO rentalDTO) {
        Optional<Rental> existingOpt = rentalRepository.findById(id);
        if (!existingOpt.isPresent()) {
            throw new RuntimeException("Rental not found with id: " + id);
        }

        validateConflict(rentalDTO, id);

        Rental existingRental = existingOpt.get();
        Rental.RentalStatus oldStatus = existingRental.getStatus();
        Rental.RentalStatus newStatus = Rental.RentalStatus.valueOf(rentalDTO.getStatus());

        // Block new ACTIVE rental for vehicles in MAINTENANCE
        if (newStatus == Rental.RentalStatus.ACTIVE && oldStatus != Rental.RentalStatus.ACTIVE) {
            blockIfMaintenance(rentalDTO.getVehicleId());
        }

        Rental rentalAtt = rentalMapper.map(rentalDTO);
        rentalAtt.setId(id);
        Rental rentalSaved = rentalRepository.save(rentalAtt);

        // Handle vehicle status transitions
        Long vehicleId = rentalSaved.getVehicle().getId();
        if (oldStatus == Rental.RentalStatus.ACTIVE && newStatus != Rental.RentalStatus.ACTIVE) {
            // ACTIVE → CLOSED/CANCELLED: release vehicle back to AVAILABLE
            updateVehicleStatus(vehicleId, Vehicle.VehicleStatus.AVAILABLE);
        } else if (oldStatus != Rental.RentalStatus.ACTIVE && newStatus == Rental.RentalStatus.ACTIVE) {
            // CLOSED/CANCELLED → ACTIVE: mark vehicle as RENTED
            updateVehicleStatus(vehicleId, Vehicle.VehicleStatus.RENTED);
        }

        return rentalMapper.map(rentalSaved);
    }

    //delete rental
    public void delete_rental(Long id) {
        Optional<Rental> existingOpt = rentalRepository.findById(id);
        if (existingOpt.isPresent()) {
            Rental rental = existingOpt.get();
            // If deleting an ACTIVE rental, release the vehicle back to AVAILABLE
            if (rental.getStatus() == Rental.RentalStatus.ACTIVE && rental.getVehicle() != null) {
                updateVehicleStatus(rental.getVehicle().getId(), Vehicle.VehicleStatus.AVAILABLE);
            }
        }
        rentalRepository.deleteById(id);
    }

    /**
     * Update the status of a vehicle.
     */
    private void updateVehicleStatus(Long vehicleId, Vehicle.VehicleStatus newStatus) {
        vehicleRepository.findById(vehicleId).ifPresent(vehicle -> {
            vehicle.setStatus(newStatus);
            vehicleRepository.save(vehicle);
        });
    }

    /**
     * Block rental creation/activation for vehicles currently in MAINTENANCE.
     */
    private void blockIfMaintenance(Long vehicleId) {
        if (vehicleId == null) return;
        vehicleRepository.findById(vehicleId).ifPresent(vehicle -> {
            if (vehicle.getStatus() == Vehicle.VehicleStatus.MAINTENANCE) {
                throw new RuntimeException("Este veículo está em manutenção e não pode ser alugado.");
            }
        });
    }

    /**
     * Validate date overlap for active rentals.
     * Overlap: newStart <= existingEnd AND newEnd >= existingStart
     * Ignores the current rental when editing.
     */
    private void validateConflict(RentalDTO dto, Long excludeId) {
        Long vehicleId = dto.getVehicleId();
        Long driverId = dto.getDriverId();

        if (vehicleId == null || driverId == null || dto.getStartDate() == null || dto.getEndDate() == null) {
            throw new IllegalArgumentException("Dados incompletos para validação de conflito.");
        }

        List<Rental> vehicleConflicts = rentalRepository.findActiveVehicleConflicts(
                vehicleId, dto.getStartDate(), dto.getEndDate());
        if (excludeId != null) {
            vehicleConflicts = vehicleConflicts.stream()
                    .filter(r -> !r.getId().equals(excludeId))
                    .toList();
        }
        if (!vehicleConflicts.isEmpty()) {
            throw new RuntimeException("Este veículo já possui um aluguel ativo no período selecionado.");
        }

        List<Rental> driverConflicts = rentalRepository.findActiveDriverConflicts(
                driverId, dto.getStartDate(), dto.getEndDate());
        if (excludeId != null) {
            driverConflicts = driverConflicts.stream()
                    .filter(r -> !r.getId().equals(excludeId))
                    .toList();
        }
        if (!driverConflicts.isEmpty()) {
            throw new RuntimeException("Este motorista já possui um aluguel ativo no período selecionado.");
        }
    }

}
