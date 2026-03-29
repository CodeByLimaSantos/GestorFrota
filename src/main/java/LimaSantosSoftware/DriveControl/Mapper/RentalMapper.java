package LimaSantosSoftware.DriveControl.Mapper;

import LimaSantosSoftware.DriveControl.DTO.RentalDTO;
import LimaSantosSoftware.DriveControl.models.Rental;
import LimaSantosSoftware.DriveControl.models.Vehicle;
import LimaSantosSoftware.DriveControl.models.Driver;
import org.springframework.stereotype.Component;

@Component
public class RentalMapper {

    // DTO -> Entity
    public Rental map(RentalDTO dto) {

        if (dto == null) return null;

        Rental rental = new Rental();

        rental.setId(dto.getId());
        rental.setStartDate(dto.getStartDate());
        rental.setEndDate(dto.getEndDate());

        // String -> Enum
        if (dto.getStatus() != null) {
            rental.setStatus(
                    Rental.RentalStatus.valueOf(dto.getStatus())
            );
        }

        // Relacionamento Vehicle
        if (dto.getVehicleId() != null) {
            Vehicle vehicle = new Vehicle();
            vehicle.setId(dto.getVehicleId());
            rental.setVehicle(vehicle);
        }

        // Relacionamento Driver
        if (dto.getDriverId() != null) {
            Driver driver = new Driver();
            driver.setId(dto.getDriverId());
            rental.setDriver(driver);
        }

        return rental;
    }

    // Entity -> DTO
    public RentalDTO map(Rental rental) {

        if (rental == null) return null;

        RentalDTO dto = new RentalDTO();

        dto.setId(rental.getId());
        dto.setStartDate(rental.getStartDate());
        dto.setEndDate(rental.getEndDate());

        // Enum -> String
        if (rental.getStatus() != null) {
            dto.setStatus(rental.getStatus().name());
        }

        // Vehicle -> ID
        if (rental.getVehicle() != null) {
            dto.setVehicleId(rental.getVehicle().getId());
        }

        // Driver -> ID
        if (rental.getDriver() != null) {
            dto.setDriverId(rental.getDriver().getId());
        }

        return dto;
    }
}