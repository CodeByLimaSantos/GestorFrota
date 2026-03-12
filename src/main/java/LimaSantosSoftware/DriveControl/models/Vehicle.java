package LimaSantosSoftware.DriveControl.models;

import jakarta.persistence.*;

@Entity
@Table( name= "Cars")

public class Vehicle {
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

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public double getWeekRate() {
        return weekRate;
    }

    public void setWeekRate(double weekRate) {
        this.weekRate = weekRate;
    }

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
    private String status;

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


}
