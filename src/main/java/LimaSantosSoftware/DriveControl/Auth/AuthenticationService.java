package LimaSantosSoftware.DriveControl.Auth;

import LimaSantosSoftware.DriveControl.models.User;
import LimaSantosSoftware.DriveControl.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TokenService tokenService;


    private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();


    public String authenticate(AuthenticationDTO dto) {
        User user = userRepository.findByEmail(dto.getEmail())
                .orElseThrow(() -> new BadCredentialsException("Invalid email or password"));

        if (!encoder.matches(dto.getPassword(), user.getPasswordHash())) {
            throw new BadCredentialsException("Invalid email or password");
        }

        return tokenService.generateToken(user);
    }

}