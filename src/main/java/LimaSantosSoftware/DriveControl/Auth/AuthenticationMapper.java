package LimaSantosSoftware.DriveControl.Auth;

import LimaSantosSoftware.DriveControl.models.User;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class AuthenticationMapper {

    public static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public static User toEntity(AuthenticationDTO dto) {
        User user = new User();
        user.setEmail(dto.getEmail());
        user.setPasswordHash(encoder.encode(dto.getPassword()));
        return user;
    }
}
