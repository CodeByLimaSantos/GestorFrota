package LimaSantosSoftware.DriveControl.models;


import jakarta.persistence.*;

import java.time.LocalDate;


@Entity
@Table(name = "Rentals")

public class Rental {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @ManyToOne // a rental can use a lot of vehicles (but only one at a time)
    private Vehicle vehicle;
    @ManyToOne // a rental can use a lot of drivers (but only one at a time)
    private Driver driver;
    private LocalDate startDate;
    private LocalDate endDate;

    public Rental() {}

    public Rental(long id, Vehicle vehicle, LocalDate startDate, Driver driver, LocalDate endDate) {
        this.id = id;
        this.vehicle = vehicle;
        this.startDate = startDate;
        this.driver = driver;
        this.endDate = endDate;
    }

    @Override
    public String toString() {
        return "Rental{" +
                "id=" + id +
                ", vehicle=" + vehicle +
                ", driver=" + driver +
                ", startDate=" + startDate +
                ", endDate=" + endDate +
                '}';
    }



    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public Vehicle getVehicle() {
        return vehicle;
    }
    public void setVehicle(Vehicle vehicle) {
        this.vehicle = vehicle;
    }
    public Driver getDriver() {
        return driver;
    }
    public void setDriver(Driver driver) {
        this.driver = driver;
    }
    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }
}
