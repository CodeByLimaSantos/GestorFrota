package LimaSantosSoftware.DriveControl.repository;

import LimaSantosSoftware.DriveControl.models.Rental;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Set;

@Repository
public interface RentalRepository extends JpaRepository<Rental, Long> {

    long countByStatus(Rental.RentalStatus status);

    /** Returns all vehicle IDs that have at least one ACTIVE rental */
    @Query("SELECT DISTINCT r.vehicle.id FROM Rental r WHERE r.status = 'ACTIVE'")
    Set<Long> findVehicleIdsWithActiveRental();

    /** Check if a specific vehicle has any ACTIVE rental */
    @Query("SELECT CASE WHEN COUNT(r) > 0 THEN true ELSE false END FROM Rental r WHERE r.vehicle.id = :vehicleId AND r.status = 'ACTIVE'")
    boolean hasActiveRentalForVehicle(@Param("vehicleId") Long vehicleId);

    @Query("SELECT r FROM Rental r WHERE r.vehicle.id = :vehicleId " +
           "AND r.status = 'ACTIVE' " +
           "AND r.startDate <= :endDate AND r.endDate >= :startDate")
    List<Rental> findActiveVehicleConflicts(@Param("vehicleId") Long vehicleId,
                                           @Param("startDate") LocalDate startDate,
                                           @Param("endDate") LocalDate endDate);

    @Query("SELECT r FROM Rental r WHERE r.driver.id = :driverId " +
           "AND r.status = 'ACTIVE' " +
           "AND r.startDate <= :endDate AND r.endDate >= :startDate")
    List<Rental> findActiveDriverConflicts(@Param("driverId") Long driverId,
                                           @Param("startDate") LocalDate startDate,
                                           @Param("endDate") LocalDate endDate);
}
