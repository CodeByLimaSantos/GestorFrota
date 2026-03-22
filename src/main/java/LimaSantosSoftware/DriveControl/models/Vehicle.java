package LimaSantosSoftware.DriveControl.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import jakarta.persistence.Column;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;

@Entity
@Table(name= "Cars")
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString

public class Vehicle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id_gerado_sequencialmente") // aqui é @Column, não @JoinColumn
    private long id;

    @Column(name = "License_Plate", nullable = false, unique = true)
    private String licensePlate;

    @Column(name = "Make", nullable = false)
    private String make;

    @Column(name = "Model", nullable = false)
    private String model;

    @Column(name = "vehicle_year")
    private int year;

    @Column(name = "Color")
    private String color;

    @Column(name = "Fuel_Type")
    private String fuelType;

    @Column(name = "Mileage")
    private int mileage;

    @Column(name = "Week_Rate")
    private double weekRate;

    @ManyToOne
    @JoinColumn(name = "Rental_Id") // aqui sim é JoinColumn, pois é relacionamento
    private Rental rental;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", columnDefinition = "varchar(255)")
    private VehicleStatus status;

        public enum VehicleStatus {
            AVAILABLE,
            RENTED,
            MAINTENANCE
        }

}
