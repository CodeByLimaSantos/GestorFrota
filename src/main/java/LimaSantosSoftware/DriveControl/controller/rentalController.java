package LimaSantosSoftware.DriveControl.controller;

import LimaSantosSoftware.DriveControl.DTO.RentalDTO;
import LimaSantosSoftware.DriveControl.Services.RentalService;
import LimaSantosSoftware.DriveControl.models.Rental;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.Parameter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/rentals")
@Tag(name = "Rentals", description = "Gerenciamento de aluguéis de veículos")
public class rentalController {

    @Autowired
    private RentalService rentalService;

    //show all rentals
    @GetMapping("/all")
    @Operation(summary = "Listar todos os aluguéis", description = "Retorna uma lista de todos os aluguéis cadastrados")
    @ApiResponse(responseCode = "200", description = "Lista de aluguéis retornada com sucesso")
    public ResponseEntity<List<RentalDTO>> showAllRentals() {
        List<RentalDTO> rentals = rentalService.show_All_Rentals();
        return ResponseEntity.ok(rentals);
    }

    //list rentals for id
    @GetMapping("/{id}")
    @Operation(summary = "Buscar aluguel por ID", description = "Retorna um aluguel específico pelo seu ID")
    @ApiResponse(responseCode = "200", description = "Aluguel encontrado")
    @ApiResponse(responseCode = "404", description = "Aluguel não encontrado")
    public ResponseEntity<RentalDTO> showRentalById(@PathVariable @Parameter(description = "ID do aluguel") Long id) {
        RentalDTO rentalFound = rentalService.show_all_rental_by_id(id);
        if (rentalFound == null) {
            return ResponseEntity.notFound().build(); // 404
        }
        return ResponseEntity.ok(rentalFound); // 200
    }


    //register rental
    @PostMapping("/Register")
    @Operation(summary = "Registrar novo aluguel", description = "Cria um novo aluguel de veículo no sistema")
    @ApiResponse(responseCode = "201", description = "Aluguel criado com sucesso")
    @ApiResponse(responseCode = "400", description = "Dados inválidos ou veículo/motorista não disponível")
    public ResponseEntity<RentalDTO> registerRental(@RequestBody RentalDTO rentalDTO) {
        RentalDTO newRental = rentalService.register_Rental(rentalDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(newRental);
    }


    //delete rental
    @DeleteMapping("/{id}")
    @Operation(summary = "Deletar aluguel", description = "Remove um aluguel do sistema")
    @ApiResponse(responseCode = "204", description = "Aluguel deletado com sucesso")
    @ApiResponse(responseCode = "404", description = "Aluguel não encontrado")
    public ResponseEntity<?> deleteRental(@PathVariable @Parameter(description = "ID do aluguel") Long id) {
        if (rentalService.show_all_rental_by_id(id) != null) {
            rentalService.delete_rental(id);
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(java.util.Map.of("error", "Rental not found."));
        }
    }

    //update rentals
    @PutMapping("/{id}")
    @Operation(summary = "Atualizar aluguel", description = "Atualiza informações de um aluguel existente")
    @ApiResponse(responseCode = "200", description = "Aluguel atualizado com sucesso")
    @ApiResponse(responseCode = "404", description = "Aluguel não encontrado")
    public ResponseEntity<?> changeRentalById(
            @PathVariable @Parameter(description = "ID do aluguel") Long id,
            @RequestBody RentalDTO rentalDTO) {
        RentalDTO rental = rentalService.ChangeDriverById(id, rentalDTO);
        return ResponseEntity.ok(rental);
    }

    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<?> handleRuntimeException(RuntimeException ex) {
        if (ex.getMessage().contains("manutenção")) {
            return ResponseEntity.status(HttpStatus.CONFLICT)
                    .body(java.util.Map.of("error", ex.getMessage()));
        }
        if (ex.getMessage().contains("aluguel")) {
            return ResponseEntity.status(HttpStatus.CONFLICT)
                    .body(java.util.Map.of("error", ex.getMessage()));
        }
        if (ex.getMessage().contains("not found") || ex.getMessage().contains("não encontrado")) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(java.util.Map.of("error", ex.getMessage()));
        }
        if (ex.getMessage().contains("incompletos")) {
            return ResponseEntity.badRequest()
                    .body(java.util.Map.of("error", ex.getMessage()));
        }
        return ResponseEntity.internalServerError()
                .body(java.util.Map.of("error", ex.getMessage()));
    }
}
