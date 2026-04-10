package LimaSantosSoftware.DriveControl.repository;

import LimaSantosSoftware.DriveControl.models.Driver;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface DriverRepository extends JpaRepository<Driver, Long> {

    long countByStatus(Driver.DriverStatus status);

    /** ON_RENTAL: drivers that have at least one ACTIVE rental */
    @Query("SELECT COUNT(DISTINCT r.driver.id) FROM Rental r WHERE r.status = 'ACTIVE'")
    long countDriversOnRental();

    /** INACTIVE: drivers who have rentals but ALL of them are CANCELLED */
    @Query("SELECT COUNT(d) FROM Driver d WHERE " +
           "d.id IN (SELECT DISTINCT r.driver.id FROM Rental r) " +
           "AND d.id NOT IN (SELECT DISTINCT r.driver.id FROM Rental r WHERE r.status <> 'CANCELLED')")
    long countDriversAllCancelled();
}
