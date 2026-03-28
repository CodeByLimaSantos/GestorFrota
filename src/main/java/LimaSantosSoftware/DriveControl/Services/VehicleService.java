package LimaSantosSoftware.DriveControl.Services;


import LimaSantosSoftware.DriveControl.DTO.VehicleDTO;
import LimaSantosSoftware.DriveControl.Mapper.DriverMapper;
import LimaSantosSoftware.DriveControl.Mapper.VehicleMapper;
import LimaSantosSoftware.DriveControl.models.Vehicle;
import LimaSantosSoftware.DriveControl.repository.VehicleRepository;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

public class VehicleService {

    private VehicleRepository vehicleRepository;
    private DriverMapper driverMapper;

    public VehicleService(VehicleRepository vehicleRepository) {
        this.vehicleRepository = vehicleRepository;
    }

    public VehicleService(DriverMapper driverMapper) {
        this.driverMapper = driverMapper;
    }

    // register vehicle
    public VehicleDTO registerVehicle(VehicleDTO vehicleDTO) {
        VehicleMapper vehicleMapper = new VehicleMapper();
        Vehicle vehicle = vehicleMapper.map(vehicleDTO);
        vehicle = vehicleRepository.save(vehicle);
        return vehicleMapper.map(vehicle);

    }

    //show all vehicles
    public List<VehicleDTO> show_all_vehicles() {
       List<Vehicle> vehicles = vehicleRepository.findAll();
       return vehicles.stream()
               .map(VehicleMapper::map)
               .collect(Collectors.toList());
    }

    //show vehicle for id
    public VehicleDTO show_all_vehicles_by_id(Long id) {
        Optional<Vehicle> VehiclePorId = vehicleRepository.findById(id);
        return VehiclePorId.map(VehicleMapper::map).orElse(null);

    }

    //delete vehicle for id
    public void DeleteVehicle(Long id) {
        vehicleRepository.deleteById(id);
    }

    //update vehicle for id
    public VehicleDTO ChangeVehicleById(Long id, VehicleDTO vehicleDTO) {
        Optional<Vehicle> VehicleExistente = vehicleRepository.findById(id);
        if (VehicleExistente.isPresent()) {
            Vehicle vehicleAtt = VehicleMapper.map(vehicleDTO);
            vehicleAtt.setId(id);
            Vehicle vehiclesaved = vehicleRepository.save(vehicleAtt);
            return VehicleMapper.map(vehiclesaved);

        }
        throw new RuntimeException("Vehicle not found with id : " + id);
    }
}
