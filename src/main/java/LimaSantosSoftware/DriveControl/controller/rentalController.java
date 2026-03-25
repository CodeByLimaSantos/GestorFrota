package LimaSantosSoftware.DriveControl.controller;

import LimaSantosSoftware.DriveControl.Services.RentalService;
import LimaSantosSoftware.DriveControl.models.Rental;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping


public class rentalController {


    @Autowired
    private RentalService rentalService;

    //show all rentals
    @GetMapping("/allRentals")
    public List<Rental> showAllRentals() {
        return rentalService.show_All_Rentals();
    }

    //list rentals for id
    @GetMapping("/searchRentals/{id}")
    public Rental show_all_rental_by_id(@PathVariable Long id) {
        return rentalService.show_all_rental_by_id(id);
    }

    //register rental
    @PostMapping("/RegisterRental")
    public Rental registerRental(@RequestBody Rental rental) {
        return rentalService.register_Rental(rental);
    }
    //delete rental
    @DeleteMapping("/DeleteRental/{id}")
    public void deleteRental(@PathVariable Long id) {
        rentalService.delete_rental(id);
    }
    //update rentals
    @PutMapping("/Change/{id}")
    public Rental changeRentalById(@PathVariable Long id, @RequestBody Rental rentalAtt) {
        return rentalService.ChangeDriverById(id, rentalAtt);

    }




}