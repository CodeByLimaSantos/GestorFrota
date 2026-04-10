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
                        .requestMatchers(HttpMethod.OPTIONS, "/**").permitAll()
                        // Auth
                        .requestMatchers(HttpMethod.POST, "/Auth/login").permitAll()
                        .requestMatchers(HttpMethod.POST, "/Auth/Register").permitAll()
                        // Vehicles
                        .requestMatchers(HttpMethod.GET, "/Vehicles/**").permitAll()
                        .requestMatchers(HttpMethod.POST, "/Vehicles/Register").permitAll()
                        .requestMatchers(HttpMethod.PUT, "/Vehicles/**").permitAll()
                        .requestMatchers(HttpMethod.DELETE, "/Vehicles/**").permitAll()
                        // Drivers
                        .requestMatchers(HttpMethod.GET, "/Drivers/**").permitAll()
                        .requestMatchers(HttpMethod.POST, "/Drivers/Register").permitAll()
                        .requestMatchers(HttpMethod.PUT, "/Drivers/**").permitAll()
                        .requestMatchers(HttpMethod.DELETE, "/Drivers/**").permitAll()
                        // Rentals
                        .requestMatchers(HttpMethod.GET, "/rentals/**").permitAll()
                        .requestMatchers(HttpMethod.POST, "/rentals/Register").permitAll()
                        .requestMatchers(HttpMethod.PUT, "/rentals/**").permitAll()
                        .requestMatchers(HttpMethod.DELETE, "/rentals/**").permitAll()
                        // Dashboard
                        .requestMatchers(HttpMethod.GET, "/dashboard/**").permitAll()
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
