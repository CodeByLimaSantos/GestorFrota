package LimaSantosSoftware.DriveControl.Services;

import LimaSantosSoftware.DriveControl.DTO.DashboardStatsDTO;
import LimaSantosSoftware.DriveControl.models.Rental;
import LimaSantosSoftware.DriveControl.models.Vehicle;
import LimaSantosSoftware.DriveControl.repository.DriverRepository;
import LimaSantosSoftware.DriveControl.repository.RentalRepository;
import LimaSantosSoftware.DriveControl.repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DashboardService {

    private final VehicleRepository vehicleRepository;
    private final DriverRepository driverRepository;
    private final RentalRepository rentalRepository;

    @Autowired
    public DashboardService(VehicleRepository vehicleRepository,
                            DriverRepository driverRepository,
                            RentalRepository rentalRepository) {
        this.vehicleRepository = vehicleRepository;
        this.driverRepository = driverRepository;
        this.rentalRepository = rentalRepository;
    }

    public DashboardStatsDTO getStats() {
        DashboardStatsDTO stats = new DashboardStatsDTO();

        // Vehicles — RENTED is derived from rentals, not from vehicle.status
        long totalVehicles = vehicleRepository.count();
        long maintenance = vehicleRepository.countByStatus(Vehicle.VehicleStatus.MAINTENANCE);
        long rented = vehicleRepository.countVehiclesWithActiveRental();
        long available = totalVehicles - maintenance - rented;

        stats.setTotalVehicles(totalVehicles);
        stats.setVehiclesAvailable(Math.max(available, 0));
        stats.setVehiclesRented(rented);
        stats.setVehiclesMaintenance(maintenance);

        // Drivers — all statuses derived from rental data
        long totalDrivers = driverRepository.count();
        long onRental = driverRepository.countDriversOnRental();
        long inactive = driverRepository.countDriversAllCancelled();
        long waiting = totalDrivers - onRental - inactive;

        stats.setTotalDrivers(totalDrivers);
        stats.setDriversOnRental(onRental);
        stats.setDriversWaiting(Math.max(waiting, 0));
        stats.setDriversInactive(inactive);

        // Rentals — COMPLETED renamed to CLOSED
        stats.setTotalRentals(rentalRepository.count());
        stats.setRentalsActive(rentalRepository.countByStatus(Rental.RentalStatus.ACTIVE));
        stats.setRentalsClosed(rentalRepository.countByStatus(Rental.RentalStatus.CLOSED));
        stats.setRentalsCancelled(rentalRepository.countByStatus(Rental.RentalStatus.CANCELLED));

        return stats;
    }
}

