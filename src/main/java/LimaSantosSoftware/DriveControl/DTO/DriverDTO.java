package LimaSantosSoftware.DriveControl.DTO;

import LimaSantosSoftware.DriveControl.models.Driver;
import LimaSantosSoftware.DriveControl.models.Rental;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class DriverDTO {

    private long id;
    private String name;
    private String cnh;
    private String cpf;
    private String licenseCategory;
    private String licenseExpiryDate;
    private String phone;
    private String email;
    private String adress;
    private Driver.DriverStatus status;
    private Rental rental;


}
