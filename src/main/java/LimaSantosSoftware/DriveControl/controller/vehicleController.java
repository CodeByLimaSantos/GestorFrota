package LimaSantosSoftware.DriveControl.controller;

import LimaSantosSoftware.DriveControl.models.Vehicle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;
import LimaSantosSoftware.DriveControl.Services.VehicleService;
import java.util.List;

@RestController
@RequestMapping


public class vehicleController {

    @Autowired
    private VehicleService vehicleService;

    @GetMapping("/allVehicles")
    public List<Vehicle> showAllVehicles() {
        return vehicleService.show_all_vehicles();

    }

    @PostMapping("/RegisterVehicle")
    public Vehicle registerVehicle(@RequestBody Vehicle vehicle) {
        return vehicleService.registerVehicle(vehicle);
    }

    @DeleteMapping("/DeleteVehicle/{id}")
    public void DeleteVehicle(@PathVariable Long id) {
        vehicleService.DeleteVehicle(id);
    }

    @PutMapping("/ChangeVehicle/{id}")
    public Vehicle changeVehicleById(@PathVariable Long id, @RequestBody Vehicle vehicleAtt) {
        return vehicleService.ChangeVehicleById(id, vehicleAtt);
    }


}
