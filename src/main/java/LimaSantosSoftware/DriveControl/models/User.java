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
@Getter
@Setter
@EqualsAndHashCode(of = "id")

public class User implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    @Column(nullable = false,unique = true)
    private String username;
    @Column(nullable = false,unique = true)
    private String email;
    @Column(nullable = false,unique = true)
    private String passwordHash;

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "user_roles", joinColumns = @JoinColumn(name = "user_id"))
    @Enumerated(EnumType.STRING)
    @Column(name = "role")
    private RoleUser role;

    //GERENCIADOR DE PERMISSOES
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        if (this.role == RoleUser.ROLE_GESTOR) {
            return List.of(
                    new SimpleGrantedAuthority("ROLE_GESTOR"),
                    new SimpleGrantedAuthority("ROLE_OPERATOR")
            );
        } else {
            return List.of(
                    new SimpleGrantedAuthority("ROLE_OPERATOR")
            );
        }
    }

    @Override
    public String getPassword() {
        return passwordHash;
    }

    @Override
    public String getUsername() {
        return username;
    }

    // Esses métodos o Spring exige
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


