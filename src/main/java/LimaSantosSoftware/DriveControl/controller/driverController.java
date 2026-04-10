package LimaSantosSoftware.DriveControl.controller;

import LimaSantosSoftware.DriveControl.DTO.DriverDTO;
import LimaSantosSoftware.DriveControl.Services.DriverService;
import LimaSantosSoftware.DriveControl.models.Driver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/Drivers")
public class driverController {
    // Fixed sintaxe bugs

    private DriverService driverService;
    @Autowired
    public driverController(DriverService driverService) {
        this.driverService = driverService;
    }

    //add drivers (create)
    @PostMapping("/Register")
    public ResponseEntity<DriverDTO> registerDriver(@RequestBody  DriverDTO driver) {
        // Set defaults for required fields the simple form may omit
        if (driver.getCpf() == null || driver.getCpf().isBlank()) {
            driver.setCpf(UUID.randomUUID().toString().substring(0, 11));
        }
        if (driver.getLicenseCategory() == null || driver.getLicenseCategory().isBlank()) {
            driver.setLicenseCategory("N/A");
        }
        if (driver.getLicenseExpiryDate() == null || driver.getLicenseExpiryDate().isBlank()) {
            driver.setLicenseExpiryDate("2030-01-01");
        }
        if (driver.getStatus() == null) {
            driver.setStatus(Driver.DriverStatus.WAITING);
        }
        DriverDTO newDriver = driverService.register_Driver(driver);
        return ResponseEntity.status(HttpStatus.CREATED).body(newDriver);
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
    return ResponseEntity.ok(drivers);
    }

    //update drivers data (update)
    @PutMapping("/Change/{id}")   // ✅ matches @PathVariable name
    public ResponseEntity<?> changeDriverById(@PathVariable Long id, @RequestBody DriverDTO driverDTO) {
        DriverDTO driver = driverService.changeDriverById(id, driverDTO);

        if (driver != null) {
            return ResponseEntity.ok(driver);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(java.util.Map.of("error", "Driver not found."));
        }
    }

    //delete drivers (delete)
    @DeleteMapping("/Delete/{id}")
    public ResponseEntity<?> DeleteDriver(@PathVariable Long id) {
      if (driverService.show_all_Driver_by_Id(id) != null) {
          driverService.delete_driver(id);
          return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
      }
      else {
          return ResponseEntity.status(HttpStatus.NOT_FOUND)
                  .body(java.util.Map.of("error", "Driver not found."));
      }
    }

}
