package LimaSantosSoftware.DriveControl.Mapper;

import LimaSantosSoftware.DriveControl.DTO.DriverDTO;
import LimaSantosSoftware.DriveControl.models.Driver;
import org.springframework.stereotype.Component;

@Component
public class DriverMapper {

    // DTO -> Entity
    public Driver map(DriverDTO driverDTO) {

        if (driverDTO == null) return null;

        Driver driver = new Driver();

        driver.setId(driverDTO.getId());
        driver.setCnh(driverDTO.getCnh());
        driver.setName(driverDTO.getName());
        driver.setCpf(driverDTO.getCpf());
        driver.setEmail(driverDTO.getEmail());
        driver.setLicenseCategory(driverDTO.getLicenseCategory());
        driver.setLicenseExpiryDate(driverDTO.getLicenseExpiryDate());
        driver.setPhone(driverDTO.getPhone());
        driver.setAdress(driverDTO.getAdress());

        // String -> Enum (se existir no DTO)
        if (driverDTO.getStatus() != null) {
            driver.setStatus(
                    Driver.DriverStatus.valueOf(String.valueOf(driverDTO.getStatus())));
        }

        return driver;
    }

    // Entity -> DTO
    public DriverDTO map(Driver driver) {

        if (driver == null) return null;

        DriverDTO driverDTO = new DriverDTO();

        driverDTO.setId(driver.getId());
        driverDTO.setCnh(driver.getCnh());
        driverDTO.setName(driver.getName());
        driverDTO.setCpf(driver.getCpf());
        driverDTO.setEmail(driver.getEmail());
        driverDTO.setLicenseCategory(driver.getLicenseCategory());
        driverDTO.setLicenseExpiryDate(driver.getLicenseExpiryDate());
        driverDTO.setPhone(driver.getPhone());
        driverDTO.setAdress(driver.getAdress());

        // Enum -> String
        if (driver.getStatus() != null) {
            driverDTO.setStatus(Driver.DriverStatus.valueOf(driver.getStatus().name()));
        }

        return driverDTO;
    }
}