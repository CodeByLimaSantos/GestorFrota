package LimaSantosSoftware.DriveControl.Services;

import LimaSantosSoftware.DriveControl.models.Rental;
import LimaSantosSoftware.DriveControl.repository.RentalRepository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;

public class RentalService {

    private RentalRepository rentalRepository;

    public RentalService(RentalRepository rentalRepository) {
        this.rentalRepository = rentalRepository;
    }
    // logic to show all Rentals
    public List<Rental> show_All_Rentals() {
        return rentalRepository.findAll();

    }
    // show rental for id
    public Rental show_all_rental_by_id(Long id) {
        Optional<Rental> RentalPorId = rentalRepository.findById(id);
        return RentalPorId.orElse(null);

    }
    //register rental
    public Rental register_Rental(Rental rental) {
        return rentalRepository.save(rental);
    }
    //delete rental
    public void delete_rental(Long id) {
        rentalRepository.deleteById(id);
    }

    //change rental for id
    public Rental ChangeDriverById(Long id, Rental rentalAtt) {
        if (rentalRepository.existsById(id)) {
            rentalAtt.setId(id);
            return rentalRepository.save(rentalAtt);

        }
        throw new RuntimeException("Rental not found with id: " + id);

    }

}
