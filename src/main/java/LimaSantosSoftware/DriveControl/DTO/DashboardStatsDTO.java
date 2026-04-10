package LimaSantosSoftware.DriveControl.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DashboardStatsDTO {

    // Vehicles
    private long totalVehicles;
    private long vehiclesAvailable;
    private long vehiclesRented;
    private long vehiclesMaintenance;

    // Drivers
    private long totalDrivers;
    private long driversOnRental;
    private long driversWaiting;
    private long driversInactive;

    // Rentals
    private long totalRentals;
    private long rentalsActive;
    private long rentalsClosed;
    private long rentalsCancelled;
}

