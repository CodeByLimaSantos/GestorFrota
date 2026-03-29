package LimaSantosSoftware.DriveControl.controller;

import LimaSantosSoftware.DriveControl.DTO.RentalDTO;
import LimaSantosSoftware.DriveControl.Services.RentalService;
import LimaSantosSoftware.DriveControl.models.Rental;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/rentals") // <-- Adicione um prefixo de URL aqui
public class rentalController {

    @Autowired
    private RentalService rentalService;

    //show all rentals
    @GetMapping("/all") // <-- Rotas relativas ao prefixo /rentals
    public List<RentalDTO> showAllRentals() {
        return rentalService.show_All_Rentals();
    }

    //list rentals for id
    @GetMapping("/{id}") // <-- Rotas relativas ao prefixo /rentals
    public RentalDTO show_all_rental_by_id(@PathVariable Long id) {
        return rentalService.show_all_rental_by_id(id);
    }

    //register rental
    @PostMapping("/register") // <-- Rotas relativas ao prefixo /rentals
    public RentalDTO registerRental(@RequestBody RentalDTO rentalDTO) {
        return rentalService.register_Rental(rentalDTO);
    }

    //delete rental
    @DeleteMapping("/{id}") // <-- Rotas relativas ao prefixo /rentals
    public void deleteRental(@PathVariable Long id) {
        rentalService.delete_rental(id);
    }

    //update rentals
    @PutMapping("/{id}") // <-- Rotas relativas ao prefixo /rentals
        public RentalDTO changeRentalById(@PathVariable Long id, @RequestBody RentalDTO rentalDTO) {
        return rentalService.ChangeDriverById(id, rentalDTO);
    }
}
