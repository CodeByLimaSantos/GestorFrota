package LimaSantosSoftware.DriveControl.controller;

import LimaSantosSoftware.DriveControl.DTO.VehicleDTO;
import LimaSantosSoftware.DriveControl.Services.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Vehicles")
public class vehicleController {

    private VehicleService vehicleService;

    @Autowired
    public vehicleController(VehicleService vehicleService) {
        this.vehicleService = vehicleService;
    }

    // show all vehicles
    @GetMapping("/all")
    public ResponseEntity<List<VehicleDTO>> showAllVehicles() {
        List<VehicleDTO> vehicles = vehicleService.show_all_vehicles();
        if (vehicles.isEmpty()) {
            return ResponseEntity.noContent().build(); // 204
        }
        return ResponseEntity.ok(vehicles); // 200
    }

    // register vehicle
    @PostMapping("/Register")
    public ResponseEntity<VehicleDTO> registerVehicle(@RequestBody VehicleDTO vehicleDTO) {
        // Set defaults for optional fields the form may omit
        if (vehicleDTO.getStatus() == null) {
            vehicleDTO.setStatus("AVAILABLE");
        }
        if (vehicleDTO.getFuelType() == null) {
            vehicleDTO.setFuelType("N/A");
        }
        if (vehicleDTO.getMileage() == 0) {
            // 0 is a valid default mileage, leave it
        }
        VehicleDTO newVehicle = vehicleService.registerVehicle(vehicleDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(newVehicle);
    }

    // update vehicle
    @PutMapping("/Change/{id}")
    public ResponseEntity<?> changeVehicleById(@PathVariable Long id, @RequestBody VehicleDTO vehicleDTO) {
        VehicleDTO vehicle = vehicleService.ChangeVehicleById(id, vehicleDTO);
        if (vehicle != null) {
            return ResponseEntity.ok(vehicle); // 200
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("Vehicle not found."); // 404
        }
    }

    @GetMapping("/search/{id}")
    public ResponseEntity<VehicleDTO> showVehicleById(@PathVariable Long id) {
        VehicleDTO vehicleFound = vehicleService.show_all_vehicles_by_id(id);
        if (vehicleFound == null) {
            return ResponseEntity.notFound().build(); // 404
        }
        return ResponseEntity.ok(vehicleFound); // 200
    }
    // delete vehicle
    @DeleteMapping("/Delete/{id}")
    public ResponseEntity<?> DeleteVehicle(@PathVariable Long id) {
        VehicleDTO vehicle = vehicleService.show_all_vehicles_by_id(id);
        if (vehicle != null) {
            vehicleService.DeleteVehicle(id);
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(java.util.Map.of("error", "Vehicle not found.")); // 404
        }
    }
}