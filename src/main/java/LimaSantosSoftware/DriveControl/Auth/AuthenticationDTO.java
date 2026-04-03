package LimaSantosSoftware.DriveControl.Auth;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data

public class AuthenticationDTO {


    @Email(message = "Invalid mail")
    @NotBlank(message = "Mail cannot be blank")
    private String email;

    @NotBlank(message = "Password cannot be blank")
    @Size(min = 6, max = 20, message = "The password must be between 6 and 20 characters long")
    private String password;


}

