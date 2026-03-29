package LimaSantosSoftware.DriveControl.Services;

import LimaSantosSoftware.DriveControl.DTO.DriverDTO;
import LimaSantosSoftware.DriveControl.Mapper.DriverMapper;
import LimaSantosSoftware.DriveControl.models.Driver;
import LimaSantosSoftware.DriveControl.models.Rental;
import LimaSantosSoftware.DriveControl.repository.DriverRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service

public class DriverService {

    @Autowired
    private DriverRepository driverRepository;
    private DriverMapper driverMapper;

    public DriverService(DriverRepository driverRepository, DriverMapper driverMapper) {
        this.driverRepository = driverRepository;
        this.driverMapper = driverMapper;
    }

    // logic to show all  Drivers
    public List<DriverDTO> showAllDrivers() {
        List<Driver> drivers = driverRepository.findAll();
        return drivers.stream()
                .map(driverMapper::map)
                .collect(Collectors.toList());
    }
    //list drivers for id
    public DriverDTO show_all_Driver_by_Id(Long id) {
        Optional<Driver> DriverPorId = driverRepository.findById(id) ;
        return DriverPorId.map(driverMapper::map).orElse(null);

    }
    //add drivers (create)
    public DriverDTO register_Driver(DriverDTO driverDTO) {
        Driver driver = driverMapper.map(driverDTO);
        driver = driverRepository.save(driver);
        return driverMapper.map(driver);


    }

    // delete drivers (delete)

    public void delete_driver(Long id) {
        driverRepository.deleteById(id);
    }
    //update drivers by id
    public DriverDTO changeDriverById(Long id, DriverDTO driverDTO) {
        Optional<Driver> driverExistente = driverRepository.findById(id);
        if (driverExistente.isPresent()) {
            Driver driverAtt = driverMapper.map(driverDTO);
            driverAtt.setId(id);
            Driver driverSaved = driverRepository.save(driverAtt);
            return driverMapper.map(driverSaved);
        }
        throw new RuntimeException("Driver not found with ID: " + id); // ✅ explicit failure
    }

    }

