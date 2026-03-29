package LimaSantosSoftware.DriveControl.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.math.BigDecimal;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class VehicleDTO {

    private Long id;

    private String licensePlate;
    private String make;
    private String model;
    private int year;
    private String color;
    private String fuelType;
    private int mileage;
    private BigDecimal weekRate;
    private Long rentalId;
    private String status;
}
