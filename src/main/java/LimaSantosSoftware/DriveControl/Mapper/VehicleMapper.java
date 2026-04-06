package LimaSantosSoftware.DriveControl.Mapper;

import LimaSantosSoftware.DriveControl.DTO.VehicleDTO;
import LimaSantosSoftware.DriveControl.models.Vehicle;
import LimaSantosSoftware.DriveControl.models.Rental;
import org.springframework.stereotype.Component;

@Component
public class VehicleMapper {

    // DTO -> Entity
    public Vehicle map(VehicleDTO dto) {

        if (dto == null) return null;

        Vehicle vehicle = new Vehicle();

        if (dto.getId() != null) {
            vehicle.setId(dto.getId());
        }
        vehicle.setLicensePlate(dto.getLicensePlate());
        vehicle.setMake(dto.getMake());
        vehicle.setModel(dto.getModel());
        vehicle.setYear(dto.getYear());
        vehicle.setColor(dto.getColor());
        vehicle.setFuelType(dto.getFuelType());
        vehicle.setMileage(dto.getMileage());
        vehicle.setWeekRate(dto.getWeekRate());

        // String -> Enum
        if (dto.getStatus() != null) {
            vehicle.setStatus(
                    Vehicle.VehicleStatus.valueOf(dto.getStatus())
            );
        }

        // relacionamento (ID → objeto leve)
        if (dto.getRentalId() != null) {
            Rental rental = new Rental();
            rental.setId(dto.getRentalId());
            vehicle.setRental(rental);
        }

        return vehicle;
    }

    // Entity -> DTO
    public VehicleDTO map(Vehicle vehicle) {

        if (vehicle == null) return null;

        VehicleDTO dto = new VehicleDTO();

        dto.setId(vehicle.getId());
        dto.setLicensePlate(vehicle.getLicensePlate());
        dto.setMake(vehicle.getMake());
        dto.setModel(vehicle.getModel());
        dto.setYear(vehicle.getYear());
        dto.setColor(vehicle.getColor());
        dto.setFuelType(vehicle.getFuelType());
        dto.setMileage(vehicle.getMileage());
        dto.setWeekRate(vehicle.getWeekRate());

        // Enum -> String
        if (vehicle.getStatus() != null) {
            dto.setStatus(vehicle.getStatus().name());
        }

        // relacionamento → ID
        if (vehicle.getRental() != null) {
            dto.setRentalId(vehicle.getRental().getId());
        }

        return dto;
    }
}