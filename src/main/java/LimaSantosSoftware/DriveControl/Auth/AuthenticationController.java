package LimaSantosSoftware.DriveControl.Auth;

import LimaSantosSoftware.DriveControl.infra.security.TokenService;
import LimaSantosSoftware.DriveControl.models.User;
import LimaSantosSoftware.DriveControl.repository.UserRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/Auth")

public class AuthenticationController {
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private TokenService tokenService;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/login")

    public ResponseEntity<LoginResponseDTO> login(@RequestBody @Valid AuthenticationDTO data) {
        var usernamePassword = new UsernamePasswordAuthenticationToken(data.username(), data.password());
        var auth = this.authenticationManager.authenticate(usernamePassword);
        var user = (User) auth.getPrincipal();
        var token = tokenService.generateToken(user);
        return ResponseEntity.ok(new LoginResponseDTO(token, user.getRole().name(), user.getUsername()));
    }


    @PostMapping("/Register")
    public ResponseEntity<?> register(@RequestBody @Valid RegisterDTO registerDTO) {

        if (this.userRepository.findByUsername(registerDTO.username()) != null) {
            return ResponseEntity.badRequest().build();
        }

        String encryptedPassword = new BCryptPasswordEncoder().encode(registerDTO.password());


        User newUser = new User(
                registerDTO.username(),
                registerDTO.email(),
                encryptedPassword,
                registerDTO.role()
        );

        this.userRepository.save(newUser);
        return ResponseEntity.ok(java.util.Map.of("message", "Usuário registrado com sucesso"));
    }
}
