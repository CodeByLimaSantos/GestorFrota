package LimaSantosSoftware.DriveControl.models;

import java.util.*;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

@Entity(name = "USERS")
@Table(name = "TB_USERS")
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of = "id")

public class User implements UserDetails {



    //constructor to registerDTO
    public User(String username, String email, String password, RoleUser role) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = role;
    }


    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    @Column(nullable = false, unique = true)
    private String username;
    @Column(nullable = false, unique = true)
    private String email;
    @Column(nullable = false, unique = true)
    private String password;
    @Enumerated(EnumType.STRING)
    @Column(name = "role", nullable = false)
    private RoleUser role;

    //GERENCIAMENTO DE PERMISSOES
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        if (this.role == RoleUser.ROLE_GESTOR) return List.of(new SimpleGrantedAuthority("GESTOR"), new SimpleGrantedAuthority("OPERATOR"));
        else return List.of(new SimpleGrantedAuthority("OPERATOR"));
    }

    @Override
    public String getPassword() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}