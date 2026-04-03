package LimaSantosSoftware.DriveControl.Auth;


import LimaSantosSoftware.DriveControl.Auth.RegisterUser.RegisterDTO;
import LimaSantosSoftware.DriveControl.models.RoleUser;
import LimaSantosSoftware.DriveControl.models.User;
import LimaSantosSoftware.DriveControl.repository.UserRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthenticationController {

    @Autowired
    private AuthenticationService authenticationService;
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponseDTO> login(@RequestBody @Valid AuthenticationDTO data) {
        String token = authenticationService.authenticate(data);
        return ResponseEntity.ok(new AuthenticationResponseDTO(token));
    }

    @PostMapping("/register")
    public ResponseEntity register(@RequestBody RegisterDTO data) {
        if (this.userRepository.findByUsername(data.username()) != null) {
            return ResponseEntity.ok("User created");
        }

        String encryptedPassword = new BCryptPasswordEncoder().encode(data.password());

        User newUser = new User();
        newUser.setUsername(data.username());
        newUser.setEmail(data.email());
        newUser.setPasswordHash(encryptedPassword);
        newUser.setRole(RoleUser.valueOf(data.role()));

        this.userRepository.save(newUser);

        return ResponseEntity.ok().build();
    }

}
