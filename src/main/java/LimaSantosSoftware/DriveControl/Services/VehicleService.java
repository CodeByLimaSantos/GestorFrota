package LimaSantosSoftware.DriveControl.Services;

import LimaSantosSoftware.DriveControl.DTO.VehicleDTO;
import LimaSantosSoftware.DriveControl.Mapper.VehicleMapper;
import LimaSantosSoftware.DriveControl.models.Vehicle;
import LimaSantosSoftware.DriveControl.repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class VehicleService {

    private VehicleRepository vehicleRepository;
    private VehicleMapper vehicleMapper;

    @Autowired
    public VehicleService(VehicleRepository vehicleRepository, VehicleMapper vehicleMapper) {
        this.vehicleRepository = vehicleRepository;
        this.vehicleMapper = vehicleMapper;
    }

    // register vehicle
    public VehicleDTO registerVehicle(VehicleDTO vehicleDTO) {
        // CORREÇÃO: Usando o mapper injetado em vez de criar um novo
        Vehicle vehicle = vehicleMapper.map(vehicleDTO);
        vehicle = vehicleRepository.save(vehicle);
        return vehicleMapper.map(vehicle);
    }

    //show all vehicles
    public List<VehicleDTO> show_all_vehicles() {
        List<Vehicle> vehicles = vehicleRepository.findAll();
        return vehicles.stream()
                .map(vehicleMapper::map) // CORREÇÃO: v minúsculo (referência ao objeto injetado)
                .collect(Collectors.toList());
    }


    //show vehicle for id
    public VehicleDTO show_all_vehicles_by_id(Long id) {
        Optional<Vehicle> vehiclePorId = vehicleRepository.findById(id);
        // CORREÇÃO: v minúsculo (referência ao objeto injetado)
        return vehiclePorId.map(vehicleMapper::map).orElse(null);
    }

    //delete vehicle for id
    public void DeleteVehicle(Long id) {
        vehicleRepository.deleteById(id);
    }

    //update vehicle for id
    public VehicleDTO ChangeVehicleById(Long id, VehicleDTO vehicleDTO) {
        Optional<Vehicle> vehicleExistente = vehicleRepository.findById(id);
        if (vehicleExistente.isPresent()) {
            // CORREÇÃO: Usando o objeto injetado
            Vehicle vehicleAtt = vehicleMapper.map(vehicleDTO);
            vehicleAtt.setId(id);
            Vehicle vehicleSaved = vehicleRepository.save(vehicleAtt);
            return vehicleMapper.map(vehicleSaved);
        }
        throw new RuntimeException("Vehicle not found with id: " + id);
    }
}
