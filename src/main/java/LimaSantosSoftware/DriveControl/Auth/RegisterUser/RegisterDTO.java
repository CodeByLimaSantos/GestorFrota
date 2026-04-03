package LimaSantosSoftware.DriveControl.Auth.RegisterUser;

public record RegisterDTO (
        String username,
        String login,
        String password,
        String role,
        String email
){}
