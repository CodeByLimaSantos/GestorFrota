package LimaSantosSoftware.DriveControl.infra.security;

import LimaSantosSoftware.DriveControl.repository.UserRepository;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class SecurityFilter extends OncePerRequestFilter {
    @Autowired
    TokenService tokenService;
    @Autowired
    UserRepository userRepository;
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        var token = this.recoverToken(request);
        System.out.println("[SecurityFilter] Request: " + request.getMethod() + " " + request.getRequestURI());
        System.out.println("[SecurityFilter] Token present: " + (token != null));

        if (token != null) {
            var login = tokenService.validateToken(token);
            System.out.println("[SecurityFilter] Validated login: " + login);

            // ✅ Só prossegue se o token for válido e retornar um login
            if (login != null && !login.isEmpty()) {
                UserDetails user = userRepository.findByUsername(login);
                System.out.println("[SecurityFilter] User found: " + (user != null ? user.getUsername() : "null"));

                // ✅ Garante que o usuário existe no banco
                if (user != null) {
                    var authentication = new UsernamePasswordAuthenticationToken(
                            user, null, user.getAuthorities()
                    );
                    SecurityContextHolder.getContext().setAuthentication(authentication);
                    System.out.println("[SecurityFilter] Authentication set with authorities: " + user.getAuthorities());
                }
            }
        }

        filterChain.doFilter(request, response); // ✅ sempre continua
    }

    private String recoverToken(HttpServletRequest request){
        var authHeader = request.getHeader("Authorization");
        if(authHeader == null) return null;
        return authHeader.replace("Bearer ", "");
    }
}
