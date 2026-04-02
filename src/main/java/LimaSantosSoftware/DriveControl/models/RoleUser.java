package LimaSantosSoftware.DriveControl.models;

public enum RoleUser {
    ROLE_GESTOR("GESTOR"),
    ROLE_OPERATOR("OPERATOR");

    private String role;

    RoleUser(String role) {
        this.role = role;
    }

    public String getRole() {
        return role;
    }
}