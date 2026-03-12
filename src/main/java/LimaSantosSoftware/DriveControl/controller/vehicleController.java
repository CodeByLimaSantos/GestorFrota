package LimaSantosSoftware.DriveControl.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping

public class vehicleController {

    @GetMapping("/pageone")
    public String BoasVindas() {
        return "first message on this program route";
    }
}
