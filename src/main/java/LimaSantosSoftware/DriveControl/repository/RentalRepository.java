package LimaSantosSoftware.DriveControl.repository;

import LimaSantosSoftware.DriveControl.models.Rental;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface RentalRepository extends JpaRepository<Rental, Long> {

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
