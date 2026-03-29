package LimaSantosSoftware.DriveControl.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class RentalDTO {
    private Long id;
    private Long vehicleId;
    private Long driverId;
    private LocalDate startDate;
    private LocalDate endDate;
    private String status;
}

