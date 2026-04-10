package LimaSantosSoftware.DriveControl.infra.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.cors.CorsConfigurationSource;

import java.util.List;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity, SecurityFilter securityFilter) throws Exception {
        return httpSecurity
                .csrf(csrf -> csrf.disable())
                .cors(cors -> cors.configurationSource(corsConfigurationSource()))
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authorizeHttpRequests(authorize -> authorize
                        // Preflight CORS
                        .requestMatchers(HttpMethod.OPTIONS, "/**").permitAll()

                        // Auth endpoints — públicos
                        .requestMatchers(HttpMethod.POST, "/Auth/login").permitAll()
                        .requestMatchers(HttpMethod.POST, "/Auth/Register").permitAll()

                        // Mutações (POST/PUT/DELETE) — somente GESTOR
                        .requestMatchers(HttpMethod.POST,   "/Vehicles/**").hasRole("GESTOR")
                        .requestMatchers(HttpMethod.PUT,    "/Vehicles/**").hasRole("GESTOR")
                        .requestMatchers(HttpMethod.DELETE,  "/Vehicles/**").hasRole("GESTOR")

                        .requestMatchers(HttpMethod.POST,   "/Drivers/**").hasRole("GESTOR")
                        .requestMatchers(HttpMethod.PUT,    "/Drivers/**").hasRole("GESTOR")
                        .requestMatchers(HttpMethod.DELETE,  "/Drivers/**").hasRole("GESTOR")

                        .requestMatchers(HttpMethod.POST,   "/rentals/**").hasRole("GESTOR")
                        .requestMatchers(HttpMethod.PUT,    "/rentals/**").hasRole("GESTOR")
                        .requestMatchers(HttpMethod.DELETE,  "/rentals/**").hasRole("GESTOR")

                        // Qualquer outra requisição — precisa estar autenticado
                        .anyRequest().authenticated()
                )
                .addFilterBefore(securityFilter, UsernamePasswordAuthenticationFilter.class)
                .build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOriginPatterns(List.of("*"));
        configuration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"));
        configuration.setAllowedHeaders(List.of("*"));
        configuration.setExposedHeaders(List.of("Authorization"));
        configuration.setAllowCredentials(true);
        configuration.setMaxAge(3600L);
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
