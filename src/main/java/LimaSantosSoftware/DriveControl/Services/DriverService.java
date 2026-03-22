package LimaSantosSoftware.DriveControl.Services;

import LimaSantosSoftware.DriveControl.models.Driver;
import LimaSantosSoftware.DriveControl.repository.DriverRepository;
import org.springframework.stereotype.Service;

import java.util.List;

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

}
