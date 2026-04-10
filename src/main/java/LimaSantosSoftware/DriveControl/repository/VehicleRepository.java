package LimaSantosSoftware.DriveControl.repository;

import LimaSantosSoftware.DriveControl.models.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface VehicleRepository extends JpaRepository<Vehicle, Long> {

    long countByStatus(Vehicle.VehicleStatus status);

    /** Count distinct vehicles that have at least one ACTIVE rental (RENTED = derived) */
    @Query("SELECT COUNT(DISTINCT r.vehicle.id) FROM Rental r WHERE r.status = 'ACTIVE'")
    long countVehiclesWithActiveRental();
}
