package LimaSantosSoftware.DriveControl.Auth;

import LimaSantosSoftware.DriveControl.models.RoleUser;


public record RegisterDTO (String username, String email, String password, RoleUser role) {
}
