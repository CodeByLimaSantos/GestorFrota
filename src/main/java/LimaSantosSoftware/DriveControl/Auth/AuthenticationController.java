package LimaSantosSoftware.DriveControl.Auth;

import LimaSantosSoftware.DriveControl.infra.security.TokenService;
import LimaSantosSoftware.DriveControl.models.User;
import LimaSantosSoftware.DriveControl.repository.UserRepository;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
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
@Tag(name = "Authentication", description = "Endpoints de autenticação e registro de usuários")
public class AuthenticationController {
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private TokenService tokenService;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/login")
    @Operation(
        summary = "Login de usuário",
        description = "Realiza autenticação do usuário e retorna JWT token para uso em requisições subsequentes"
    )
    @ApiResponse(
        responseCode = "200",
        description = "Login bem-sucedido",
        content = @Content(schema = @Schema(implementation = LoginResponseDTO.class))
    )
    @ApiResponse(responseCode = "400", description = "Credenciais inválidas")
    public ResponseEntity<LoginResponseDTO> login(@RequestBody @Valid AuthenticationDTO data) {
        var usernamePassword = new UsernamePasswordAuthenticationToken(data.username(), data.password());
        var auth = this.authenticationManager.authenticate(usernamePassword);
        var user = (User) auth.getPrincipal();
        var token = tokenService.generateToken(user);
        return ResponseEntity.ok(new LoginResponseDTO(token));
    }


    @PostMapping("/Register")
    @Operation(
        summary = "Registrar novo usuário",
        description = "Cria um novo usuário no sistema com validações de username único"
    )
    @ApiResponse(
        responseCode = "200",
        description = "Usuário registrado com sucesso",
        content = @Content(schema = @Schema(implementation = User.class))
    )
    @ApiResponse(responseCode = "400", description = "Username já existe ou dados inválidos")
    public ResponseEntity<User> register(@RequestBody @Valid RegisterDTO registerDTO) {

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

        User savedUser = this.userRepository.save(newUser)
                ;
        return ResponseEntity.ok(savedUser);
    }
}
