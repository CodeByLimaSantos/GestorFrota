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
    public Driver registerDriver(@RequestBody  Driver driver) {
        return driverService.register_Driver(driver);
    }

    //search drivers for id (read)
    @GetMapping("/searchDrivers/{ID}")
    public Driver show_all_Driver_by_Id(@PathVariable Long id) {
    return driverService.show_all_Driver_by_Id(id);
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
    @DeleteMapping("/DeleteDriver/{id}")
    public void DeleteDriver(@PathVariable Long id) {
      driverService.delete_driver(id);
    }

}
