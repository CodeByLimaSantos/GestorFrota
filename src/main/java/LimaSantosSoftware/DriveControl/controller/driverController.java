package LimaSantosSoftware.DriveControl.controller;

import LimaSantosSoftware.DriveControl.DTO.DriverDTO;
import LimaSantosSoftware.DriveControl.Services.DriverService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<String> registerDriver(@RequestBody  DriverDTO driver) {
        DriverDTO newDriver = driverService.register_Driver(driver);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body("Driver registered with sucess." + newDriver.getName() + "(ID) : " + newDriver.getId());
    }


    //search drivers for id (read)
    @GetMapping("/search/{id}")
    public ResponseEntity<DriverDTO> showDriverById(@PathVariable Long id) {
        DriverDTO driverFound = driverService.show_all_Driver_by_Id(id);
        if (driverFound == null) {
            return ResponseEntity.notFound().build(); // 404
        }
        return ResponseEntity.ok(driverFound); // 200
    }

    //show all drivers(read)
    @GetMapping("/all")
    public ResponseEntity<List<DriverDTO>> showAllDrivers () {
    List<DriverDTO> drivers = driverService.showAllDrivers();
    if (drivers.isEmpty()) {
        return ResponseEntity.noContent().build();
         }
    else                  {
        return ResponseEntity.ok(drivers);
        }
    }

    //update drivers data (update)
    @PutMapping("/Change/{id}")   // ✅ matches @PathVariable name
    public ResponseEntity<?> changeDriverById(@PathVariable Long id, @RequestBody DriverDTO driverDTO) {
        DriverDTO driver = driverService.changeDriverById(id, driverDTO);

        if (driver != null) {
            return ResponseEntity.ok(driver);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("Driver not found.");
        }
    }

    //delete drivers (delete)
    @DeleteMapping("/Delete/{id}")
    public ResponseEntity<String> DeleteDriver(@PathVariable Long id) {
      if (driverService.show_all_Driver_by_Id(id) != null) {
          driverService.delete_driver(id);
          return ResponseEntity.status(HttpStatus.OK)
                  .body("Driver deleted with sucess!");
      }
      else {
          return ResponseEntity.status(HttpStatus.NOT_FOUND)
                  .body("Driver not found.");
      }



    }


}
