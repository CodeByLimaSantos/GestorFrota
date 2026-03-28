package LimaSantosSoftware.DriveControl.Services;


import LimaSantosSoftware.DriveControl.DTO.VehicleDTO;
import LimaSantosSoftware.DriveControl.Mapper.DriverMapper;
import LimaSantosSoftware.DriveControl.Mapper.VehicleMapper;
import LimaSantosSoftware.DriveControl.models.Vehicle;
import LimaSantosSoftware.DriveControl.repository.VehicleRepository;
import java.util.List;
import java.util.Optional;

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
    public List<Vehicle> show_all_vehicles() {
        return vehicleRepository.findAll();
    }

    //show vehicle for id
    public Vehicle show_all_vehicles_by_id(Long id) {
        Optional<Vehicle> VehiclePorId = vehicleRepository.findById(id);
        return VehiclePorId.orElse(null);

    }

    //delete vehicle for id
    public void DeleteVehicle(Long id) {
        vehicleRepository.deleteById(id);
    }

    //update vehicle for id
    public Vehicle ChangeVehicleById(Long id, Vehicle vehicleAtt) {
        if (vehicleRepository.existsById(id)) {
            vehicleAtt.setId(id);
            return vehicleRepository.save(vehicleAtt);

        }
        throw new RuntimeException("Vehicle not found with id : " + id);
    }
}
