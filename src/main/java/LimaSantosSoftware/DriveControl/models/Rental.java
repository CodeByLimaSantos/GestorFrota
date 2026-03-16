package LimaSantosSoftware.DriveControl.models;


import jakarta.persistence.*;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDate;


@Entity
@Table(name = "Rentals")
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString

public class Rental {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne // a rental can use a lot of vehicles (but only one at a time)
    private Vehicle vehicle;
    @ManyToOne // a rental can use a lot of drivers (but only one at a time)
    private Driver driver;
    private LocalDate startDate;
    private LocalDate endDate;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private RentalStatus status;

    public enum RentalStatus {
        ACTIVE,
        COMPLETED,
        CANCELLED
    }

}
