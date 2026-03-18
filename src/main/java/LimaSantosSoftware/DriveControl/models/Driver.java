package LimaSantosSoftware.DriveControl.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name = "Drivers")
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString

public class Driver {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(nullable = false)
    private String name;
    @Column(nullable = false, unique = true)
    private String cnh;
    @Column(nullable = false, unique = true)
    private String cpf;
    @Column(nullable = false)
    private String licenseCategory;
    @Column(nullable = false)
    private String licenseExpiryDate;
    @Column(unique = true)
    private String phone;
    private String email;
    private String adress;
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private DriverStatus status;
    @ManyToOne // a driver can use a lot of rental ( but only one at a time)
    private Rental rental;

    public enum DriverStatus {
        ACTIVE,
        RENTED,
        ON_HOLD,
        INACTIVE
    }
}
