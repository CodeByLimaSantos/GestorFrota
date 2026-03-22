package LimaSantosSoftware.DriveControl.controller;

import LimaSantosSoftware.DriveControl.Services.DriverService;
import LimaSantosSoftware.DriveControl.models.Driver;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping
@Service
public class driverController {

    public driverController(DriverService driverService) {
        this.driverService = driverService;
    }

    private DriverService driverService;

    //add drivers (create)
    @PostMapping("/RegisterDriver")
    public String registerDriver() {
        return "Driver registered with sucess!";
    }

    //search drivers for id (read)
    @GetMapping("/searchDrivers")
    public String searchDrivers () {
        return "drivers found: ";
    }
    //show all drivers(read)
    @GetMapping("/allDrivers")
    public List<Driver> showAllDrivers () {
        return driverService.show_All_Drivers();
    }
    //update drivers data (update)
    @PutMapping("/ChangeId")
    public String changeDriversForId() {
        return "change drivers for id";
    }
    //delete drivers (delete)
    @DeleteMapping("/DeleteDriver")
    public String DeleteDriver() {
        return "delete driver";
    }

}
