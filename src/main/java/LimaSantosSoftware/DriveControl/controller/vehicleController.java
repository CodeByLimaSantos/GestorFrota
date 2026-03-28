package LimaSantosSoftware.DriveControl.controller;

import LimaSantosSoftware.DriveControl.DTO.VehicleDTO;
import LimaSantosSoftware.DriveControl.models.Vehicle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import LimaSantosSoftware.DriveControl.Services.VehicleService;
import java.util.List;

@RestController
@RequestMapping


public class vehicleController {

    @Autowired
    private VehicleService vehicleService;

    @GetMapping("/allVehicles")
    public List<VehicleDTO> showAllVehicles() {
        return vehicleService.show_all_vehicles();
    }


    @PostMapping("/RegisterVehicle")
    public VehicleDTO registerVehicle(@RequestBody VehicleDTO vehicleDTO) {
        return vehicleService.registerVehicle(vehicleDTO);
    }

    @DeleteMapping("/DeleteVehicle/{id}")
    public void DeleteVehicle(@PathVariable Long id) {
        vehicleService.DeleteVehicle(id);
    }

    @PutMapping("/ChangeVehicle/{id}")
    public VehicleDTO changeVehicleById(@PathVariable Long id, @RequestBody VehicleDTO vehicleDTO) {
        return vehicleService.ChangeVehicleById(id, vehicleDTO);
    }


}
