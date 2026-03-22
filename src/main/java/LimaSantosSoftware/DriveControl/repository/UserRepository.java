package LimaSantosSoftware.DriveControl.repository;

import LimaSantosSoftware.DriveControl.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}
