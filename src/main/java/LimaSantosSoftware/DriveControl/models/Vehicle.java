package LimaSantosSoftware.DriveControl.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name= "Cars")
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString

public class Vehicle {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private long id;
        @Column(nullable = false, unique = true)
        private String licensePlate;
        @Column(nullable = false)
        private String make;
        @Column(nullable = false)
        private String model;

        private int year;
        private String color;
        private String fuelType;
        private int mileage;
        private double weekRate;
        @ManyToOne //a lot of contracts can use the same vehicle( but only one at a time)
        private Rental rental;
        @Enumerated(EnumType.STRING)
        @Column(nullable = false)
        private VehicleStatus status;

        public enum VehicleStatus {
            AVAILABLE,
            RENTED,
            MAINTENANCE
        }

}
