package LimaSantosSoftware.DriveControl.Services;

import LimaSantosSoftware.DriveControl.models.Driver;
import LimaSantosSoftware.DriveControl.repository.DriverRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.Optional;

@Service

public class DriverService {

    private DriverRepository driverRepository;

    public DriverService(DriverRepository driverRepository) {
        this.driverRepository = driverRepository;
    }
    // logic to show all  Drivers
    public List<Driver> show_All_Drivers() {
        return driverRepository.findAll();

    }
    //list drivers for id
    public Driver show_all_Driver_by_Id(Long id) {
        Optional<Driver> DriverPorId = driverRepository.findById(id) ;
        return DriverPorId.orElse(null);

    }
    //add drivers (create)
    public Driver register_Driver(Driver driver) {
        return driverRepository.save(driver);
    }

    // delete ninjas (delate)
    public void delete_driver(Driver driver) {
       driverRepository.delete(driver);
    }

    public void delete_driver(Long id) {
        driverRepository.deleteById(id);
    }
}
