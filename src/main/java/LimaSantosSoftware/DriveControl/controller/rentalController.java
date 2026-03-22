package LimaSantosSoftware.DriveControl.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping

public class rentalController {
    //add drivers (create)
    @PostMapping("/RegisterRental")
    public String registerDriver() {
        return "Rental registered with sucess!";
    }

    //search Rental for id (read)
    @GetMapping("/searchRentals")
    public String searchDrivers () {
        return "Rentals found: ";
    }
    //show all Rentals(read)
    @GetMapping("/allRentals")
    public String showAllDrivers () {
        return "All Rentals";
    }
    //update Rentals data (update)
    @PutMapping("/{i}")
    public String changeDriversForId() {
        return "change Rental for id";
    }
    //delete Rentals (delete)
    @DeleteMapping("/DeleteRental")
    public String DeleteRental() {
        return "delete Rental";
    }

}
