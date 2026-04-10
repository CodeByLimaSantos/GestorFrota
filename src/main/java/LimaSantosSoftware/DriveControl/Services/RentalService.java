package LimaSantosSoftware.DriveControl.Services;

import LimaSantosSoftware.DriveControl.DTO.RentalDTO;
import LimaSantosSoftware.DriveControl.Mapper.RentalMapper;
import LimaSantosSoftware.DriveControl.models.Rental;
import LimaSantosSoftware.DriveControl.repository.RentalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class RentalService {

    private RentalRepository rentalRepository;
    private RentalMapper rentalMapper;


    @Autowired
    public RentalService(RentalMapper rentalMapper, RentalRepository rentalRepository) {
        this.rentalMapper = rentalMapper;
        this.rentalRepository = rentalRepository;
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

        Rental rental = rentalMapper.map(rentalDTO);
        rental = rentalRepository.save(rental);
        return rentalMapper.map(rental);

    }

    //change rental for id
    public RentalDTO ChangeDriverById(Long id, RentalDTO rentalDTO) {
        if (!rentalRepository.findById(id).isPresent()) {
            throw new RuntimeException("Rental not found with id: " + id);
        }

        validateConflict(rentalDTO, id);

        Rental rentalAtt = rentalMapper.map(rentalDTO);
        rentalAtt.setId(id);
        Rental rentalSaved = rentalRepository.save(rentalAtt);
        return rentalMapper.map(rentalSaved);
    }

    //delete rental
    public void delete_rental(Long id) {
        rentalRepository.deleteById(id);
    }

    /**
     * Validate date overlap for active rentals.
     * Skips validation when new status is not ACTIVE.
     */
    private void validateConflict(RentalDTO dto, Long excludeId) {
        // Only validate conflicts for ACTIVE rentals
        if (dto.getStatus() != null && !"ACTIVE".equalsIgnoreCase(dto.getStatus())) {
            return;
        }

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
