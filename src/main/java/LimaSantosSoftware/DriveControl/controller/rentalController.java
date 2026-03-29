package LimaSantosSoftware.DriveControl.controller;

import LimaSantosSoftware.DriveControl.DTO.RentalDTO;
import LimaSantosSoftware.DriveControl.Services.RentalService;
import LimaSantosSoftware.DriveControl.models.Rental;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/rentals") // <-- Adicione um prefixo de URL aqui
public class rentalController {

    @Autowired
    private RentalService rentalService;

    //show all rentals
    @GetMapping("/all")
    public ResponseEntity<List<RentalDTO>> showAllRentals() {
        List<RentalDTO> rentals = rentalService.show_All_Rentals();
        if (rentals.isEmpty()) {
            return ResponseEntity.noContent().build(); // 204
        }
        return ResponseEntity.ok(rentals); // 200
    }

    //list rentals for id
    @GetMapping("/{id}")
    public ResponseEntity<RentalDTO> showRentalById(@PathVariable Long id) {
        RentalDTO rentalFound = rentalService.show_all_rental_by_id(id);
        if (rentalFound == null) {
            return ResponseEntity.notFound().build(); // 404
        }
        return ResponseEntity.ok(rentalFound); // 200
    }


    //register rental
    public ResponseEntity<String> registerRental(@RequestBody RentalDTO rentalDTO) {
        RentalDTO newRental = rentalService.register_Rental(rentalDTO);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body("Rental registered with success. (ID) : " + newRental.getId()); // 201
    }


    //delete rental
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteRental(@PathVariable Long id) {
        if (rentalService.show_all_rental_by_id(id) != null) {
            rentalService.delete_rental(id);
            return ResponseEntity.status(HttpStatus.OK)
                    .body("Rental deleted with success!"); // 200
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("Rental not found."); // 404
        }
    }

    //update rentals
    @PutMapping("/{id}")
    public ResponseEntity<?> changeRentalById(@PathVariable Long id, @RequestBody RentalDTO rentalDTO) {
        RentalDTO rental = rentalService.ChangeDriverById(id, rentalDTO);
        if (rental != null) {
            return ResponseEntity.ok(rental); // 200
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("Rental not found."); // 404
        }
    }
}
