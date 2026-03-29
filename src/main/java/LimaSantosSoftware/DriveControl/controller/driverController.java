package LimaSantosSoftware.DriveControl.controller;

import LimaSantosSoftware.DriveControl.DTO.DriverDTO;
import LimaSantosSoftware.DriveControl.Services.DriverService;
import LimaSantosSoftware.DriveControl.models.Driver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Drivers")
@Service
public class driverController {

    private DriverService driverService;
    @Autowired
    public driverController(DriverService driverService) {
        this.driverService = driverService;
    }

    //add drivers (create)
    @PostMapping("/Register")
    public DriverDTO registerDriver(@RequestBody  DriverDTO driverDTO) {
        return driverService.register_Driver(driverDTO);
    }

    //search drivers for id (read)
    @GetMapping("/search/{ID}")
    public DriverDTO show_all_Driver_by_Id(@PathVariable Long id) {
    return driverService.show_all_Driver_by_Id(id);
    }

    //show all drivers(read)
    @GetMapping("/all")
    public List<DriverDTO> showAllDrivers () {
        return driverService.showAllDrivers();
    }

    //update drivers data (update)
    @PutMapping("/Change/{id}")   // ✅ matches @PathVariable name
    public DriverDTO changeDriverById(@PathVariable Long id, @RequestBody DriverDTO driverDTO) {
        return driverService.changeDriverById(id, driverDTO);  // ✅ complete call
    }

    //delete drivers (delete)
    @DeleteMapping("/Delete/{id}")
    public void DeleteDriver(@PathVariable Long id) {
      driverService.delete_driver(id);
    }


}
