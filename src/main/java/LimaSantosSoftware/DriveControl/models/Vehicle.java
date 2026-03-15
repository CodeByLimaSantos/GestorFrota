package LimaSantosSoftware.DriveControl.models;

import jakarta.persistence.*;

@Entity
@Table( name= "Cars")

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

    public Vehicle() {}

    public Vehicle(long id, String licensePlate,
                   String make, String model,
                   int year, String fuelType,
                   String color, int mileage,
                   double weekRate,
                   VehicleStatus status) {
            this.id = id;
            this.licensePlate = licensePlate;
            this.make = make;
            this.model = model;
            this.year = year;
            this.fuelType = fuelType;
            this.color = color;
            this.mileage = mileage;
            this.weekRate = weekRate;
            this.status = status;
    }

    @Override
    public String toString() {
        return  "id :" + id +
                ", licensePlate : " + licensePlate +
                ", make : " + make +
                ", model : " + model +
                ", year : " + year +
                ", color : " + color +
                ", fuelType :" + fuelType +
                ", mileage : " + mileage +
                ", weekRate : " + weekRate +
                ", status : " + status ;
    }
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getLicensePlate() {
        return licensePlate;
    }

    public void setLicensePlate(String licensePlate) {
        this.licensePlate = licensePlate;
    }

    public String getMake() {
        return make;
    }

    public void setMake(String make) {
        this.make = make;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public int getMileage() {
        return mileage;
    }

    public void setMileage(int mileage) {
        this.mileage = mileage;
    }

    public String getFuelType() {
        return fuelType;
    }

    public void setFuelType(String fuelType) {
        this.fuelType = fuelType;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }
    public double getWeekRate() {
        return weekRate;
    }

    public void setWeekRate(double weekRate) {
        this.weekRate = weekRate;
    }
    public VehicleStatus getStatus() {
        return status;
    }

    public void setStatus(VehicleStatus status) {
        this.status = status;
    }


}
