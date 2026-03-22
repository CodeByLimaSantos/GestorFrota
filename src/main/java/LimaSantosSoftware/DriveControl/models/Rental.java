package LimaSantosSoftware.DriveControl.models;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDate;


@Entity
@Table(name = "TB_RENTALS")
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString

public class Rental {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne // a rental can use a lot of vehicles (but only one at a time)
    @JoinColumn(name = "vehicle_id")
    @JsonIgnore
    private Vehicle vehicle;
    @ManyToOne // a rental can use a lot of drivers (but only one at a time)
    @JoinColumn(name = "driver_id")
    @JsonIgnore
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
