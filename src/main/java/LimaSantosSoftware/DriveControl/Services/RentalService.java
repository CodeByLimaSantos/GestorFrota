package LimaSantosSoftware.DriveControl.Services;

import LimaSantosSoftware.DriveControl.DTO.RentalDTO;
import LimaSantosSoftware.DriveControl.Mapper.RentalMapper;
import LimaSantosSoftware.DriveControl.models.Rental;
import LimaSantosSoftware.DriveControl.repository.RentalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class RentalService {

    private RentalRepository rentalRepository;
    private RentalMapper rentalMapper;


    @Autowired
    public RentalService(RentalMapper rentalMapper, RentalRepository rentalRepository) {
        this.rentalMapper = rentalMapper;
        this.rentalRepository = rentalRepository;
    }


    // logic to show all Rentals
    public List<RentalDTO> show_All_Rentals() {
        List<Rental> rentals = rentalRepository.findAll();
        return rentals.stream()
                .map(rentalMapper::map)
                .collect(Collectors.toList());

    }

    // show rental for id
    public RentalDTO show_all_rental_by_id(Long id) {
        Optional<Rental> RentalPorId = rentalRepository.findById(id);
        return RentalPorId.map(rentalMapper::map).orElse(null);
    }

    //register rental
    public RentalDTO register_Rental(RentalDTO rentalDTO) {
        Rental rental = rentalMapper.map(rentalDTO);
        rental = rentalRepository.save(rental);
        return rentalMapper.map(rental);

    }
    //delete rental
    public void delete_rental(Long id) {
        rentalRepository.deleteById(id);
    }

    //change rental for id
    public RentalDTO ChangeDriverById(Long id, RentalDTO rentalDTO) {
      Optional<Rental> rentalExistente = rentalRepository.findById(id);
      if (rentalExistente.isPresent()) {
          Rental rentalAtt = rentalMapper.map(rentalDTO);
          rentalAtt.setId(id);
          Rental rentalSaved = rentalRepository.save(rentalAtt);
          return rentalMapper.map(rentalSaved);
        }
        throw new RuntimeException("Rental not found with id: " + id);

    }

}
