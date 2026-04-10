package LimaSantosSoftware.DriveControl.Services;

import LimaSantosSoftware.DriveControl.DTO.VehicleDTO;
import LimaSantosSoftware.DriveControl.Mapper.VehicleMapper;
import LimaSantosSoftware.DriveControl.models.Vehicle;
import LimaSantosSoftware.DriveControl.repository.RentalRepository;
import LimaSantosSoftware.DriveControl.repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class VehicleService {

    private final VehicleRepository vehicleRepository;
    private final VehicleMapper vehicleMapper;
    private final RentalRepository rentalRepository;

    @Autowired
    public VehicleService(VehicleRepository vehicleRepository, VehicleMapper vehicleMapper, RentalRepository rentalRepository) {
        this.vehicleRepository = vehicleRepository;
        this.vehicleMapper = vehicleMapper;
        this.rentalRepository = rentalRepository;
    }

    // register vehicle
    public VehicleDTO registerVehicle(VehicleDTO vehicleDTO) {
        validateVehicleStatus(vehicleDTO);
        Vehicle vehicle = vehicleMapper.map(vehicleDTO);
        vehicle = vehicleRepository.save(vehicle);
        return vehicleMapper.map(vehicle);
    }

    // show all vehicles — RENTED status is COMPUTED from active rentals in DB
    public List<VehicleDTO> show_all_vehicles() {
        List<Vehicle> vehicles = vehicleRepository.findAll();
        Set<Long> rentedVehicleIds = rentalRepository.findVehicleIdsWithActiveRental();

        return vehicles.stream()
                .map(vehicle -> {
                    VehicleDTO dto = vehicleMapper.map(vehicle);
                    // Override status based on rental table (source of truth)
                    if (rentedVehicleIds.contains(vehicle.getId())) {
                        dto.setStatus("RENTED");
                    } else if ("RENTED".equals(dto.getStatus())) {
                        // Stale RENTED status — vehicle has no active rental, fix it
                        dto.setStatus("AVAILABLE");
                        vehicle.setStatus(Vehicle.VehicleStatus.AVAILABLE);
                        vehicleRepository.save(vehicle);
                    }
                    return dto;
                })
                .collect(Collectors.toList());
    }

    // show vehicle for id — RENTED status is COMPUTED from active rentals in DB
    public VehicleDTO show_all_vehicles_by_id(Long id) {
        Optional<Vehicle> vehiclePorId = vehicleRepository.findById(id);
        if (vehiclePorId.isEmpty()) return null;

        Vehicle vehicle = vehiclePorId.get();
        VehicleDTO dto = vehicleMapper.map(vehicle);

        boolean hasActiveRental = rentalRepository.hasActiveRentalForVehicle(id);
        if (hasActiveRental) {
            dto.setStatus("RENTED");
        } else if ("RENTED".equals(dto.getStatus())) {
            // Stale RENTED status — clean up
            dto.setStatus("AVAILABLE");
            vehicle.setStatus(Vehicle.VehicleStatus.AVAILABLE);
            vehicleRepository.save(vehicle);
        }
        return dto;
    }

    // delete vehicle for id
    public void DeleteVehicle(Long id) {
        // Block deletion of vehicles with active rentals
        if (rentalRepository.hasActiveRentalForVehicle(id)) {
            throw new RuntimeException("Não é possível excluir um veículo que está alugado. Finalize ou cancele o aluguel primeiro.");
        }
        vehicleRepository.deleteById(id);
    }

    // update vehicle for id
    public VehicleDTO ChangeVehicleById(Long id, VehicleDTO vehicleDTO) {
        Optional<Vehicle> vehicleExistente = vehicleRepository.findById(id);
        if (vehicleExistente.isPresent()) {
            Vehicle existing = vehicleExistente.get();
            boolean hasActiveRental = rentalRepository.hasActiveRentalForVehicle(id);

            // If the vehicle has an active rental, its status is RENTED and cannot be changed
            if (hasActiveRental) {
                vehicleDTO.setStatus("RENTED");
            } else {
                validateVehicleStatus(vehicleDTO);
                // If stored status was RENTED but no active rental exists, default to AVAILABLE
                if (existing.getStatus() == Vehicle.VehicleStatus.RENTED) {
                    if (vehicleDTO.getStatus() == null || "RENTED".equalsIgnoreCase(vehicleDTO.getStatus())) {
                        vehicleDTO.setStatus("AVAILABLE");
                    }
                }
            }

            Vehicle vehicleAtt = vehicleMapper.map(vehicleDTO);
            vehicleAtt.setId(id);
            Vehicle vehicleSaved = vehicleRepository.save(vehicleAtt);

            // Return computed status
            VehicleDTO result = vehicleMapper.map(vehicleSaved);
            if (hasActiveRental) {
                result.setStatus("RENTED");
            }
            return result;
        }
        throw new RuntimeException("Vehicle not found with id: " + id);
    }

    /**
     * Validates vehicle status: RENTED is computed from rentals, never set manually.
     * Only AVAILABLE and MAINTENANCE are allowed.
     */
    private void validateVehicleStatus(VehicleDTO dto) {
        if (dto.getStatus() == null) {
            dto.setStatus("AVAILABLE");
            return;
        }
        if ("RENTED".equalsIgnoreCase(dto.getStatus())) {
            throw new IllegalArgumentException("O status 'Alugado' é automático e não pode ser definido manualmente.");
        }
    }
}
