package LimaSantosSoftware.DriveControl.controller;

import LimaSantosSoftware.DriveControl.DTO.VehicleDTO;
import LimaSantosSoftware.DriveControl.Services.VehicleService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.Parameter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Vehicles")
@Tag(name = "Vehicles", description = "Gerenciamento de veículos")
public class vehicleController {

    private VehicleService vehicleService;

    @Autowired
    public vehicleController(VehicleService vehicleService) {
        this.vehicleService = vehicleService;
    }

    // show all vehicles
    @GetMapping("/all")
    @Operation(summary = "Listar todos os veículos", description = "Retorna uma lista de todos os veículos cadastrados")
    @ApiResponse(responseCode = "200", description = "Lista de veículos retornada com sucesso")
    public ResponseEntity<List<VehicleDTO>> showAllVehicles() {
        List<VehicleDTO> vehicles = vehicleService.show_all_vehicles();
        return ResponseEntity.ok(vehicles);
    }

    // register vehicle
    @PostMapping("/Register")
    @Operation(summary = "Registrar novo veículo", description = "Cria um novo veículo no sistema")
    @ApiResponse(responseCode = "201", description = "Veículo criado com sucesso")
    @ApiResponse(responseCode = "400", description = "Dados inválidos")
    public ResponseEntity<VehicleDTO> registerVehicle(@RequestBody VehicleDTO vehicleDTO) {
        // Set defaults for optional fields the form may omit
        if (vehicleDTO.getStatus() == null) {
            vehicleDTO.setStatus("AVAILABLE");
        }
        if (vehicleDTO.getFuelType() == null) {
            vehicleDTO.setFuelType("N/A");
        }
        if (vehicleDTO.getMileage() == 0) {
            // 0 is a valid default mileage, leave it
        }
        VehicleDTO newVehicle = vehicleService.registerVehicle(vehicleDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(newVehicle);
    }

    // update vehicle
    @PutMapping("/Change/{id}")
    @Operation(summary = "Atualizar veículo", description = "Atualiza informações de um veículo existente")
    @ApiResponse(responseCode = "200", description = "Veículo atualizado com sucesso")
    @ApiResponse(responseCode = "404", description = "Veículo não encontrado")
    public ResponseEntity<?> changeVehicleById(
            @PathVariable @Parameter(description = "ID do veículo") Long id,
            @RequestBody VehicleDTO vehicleDTO) {
        VehicleDTO vehicle = vehicleService.ChangeVehicleById(id, vehicleDTO);
        if (vehicle != null) {
            return ResponseEntity.ok(vehicle); // 200
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("Vehicle not found."); // 404
        }
    }

    @GetMapping("/search/{id}")
    @Operation(summary = "Buscar veículo por ID", description = "Retorna um veículo específico pelo seu ID")
    @ApiResponse(responseCode = "200", description = "Veículo encontrado")
    @ApiResponse(responseCode = "404", description = "Veículo não encontrado")
    public ResponseEntity<VehicleDTO> showVehicleById(@PathVariable @Parameter(description = "ID do veículo") Long id) {
        VehicleDTO vehicleFound = vehicleService.show_all_vehicles_by_id(id);
        if (vehicleFound == null) {
            return ResponseEntity.notFound().build(); // 404
        }
        return ResponseEntity.ok(vehicleFound); // 200
    }

    // delete vehicle
    @DeleteMapping("/Delete/{id}")
    @Operation(summary = "Deletar veículo", description = "Remove um veículo do sistema")
    @ApiResponse(responseCode = "204", description = "Veículo deletado com sucesso")
    @ApiResponse(responseCode = "404", description = "Veículo não encontrado")
    public ResponseEntity<?> DeleteVehicle(@PathVariable @Parameter(description = "ID do veículo") Long id) {
        VehicleDTO vehicle = vehicleService.show_all_vehicles_by_id(id);
        if (vehicle != null) {
            vehicleService.DeleteVehicle(id);
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(java.util.Map.of("error", "Vehicle not found.")); // 404
        }
    }

    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<?> handleRuntimeException(RuntimeException ex) {
        String msg = ex.getMessage();
        if (msg != null && (msg.contains("alugado") || msg.contains("aluguel"))) {
            return ResponseEntity.status(HttpStatus.CONFLICT)
                    .body(java.util.Map.of("error", msg));
        }
        if (msg != null && msg.contains("not found")) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(java.util.Map.of("error", msg));
        }
        return ResponseEntity.internalServerError()
                .body(java.util.Map.of("error", msg != null ? msg : "Erro interno"));
    }

    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<?> handleIllegalArgument(IllegalArgumentException ex) {
        return ResponseEntity.badRequest()
                .body(java.util.Map.of("error", ex.getMessage()));
    }
}