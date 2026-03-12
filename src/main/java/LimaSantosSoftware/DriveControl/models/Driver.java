package LimaSantosSoftware.DriveControl.models;

import jakarta.persistence.*;

@Entity
@Table(name = "Drivers")

public class Driver {

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCnh() {
        return cnh;
    }

    public void setCnh(String cnh) {
        this.cnh = cnh;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getLicenseCategory() {
        return licenseCategory;
    }

    public void setLicenseCategory(String licenseCategory) {
        this.licenseCategory = licenseCategory;
    }

    public String getLicenseExpiryDate() {
        return licenseExpiryDate;
    }

    public void setLicenseExpiryDate(String licenseExpiryDate) {
        this.licenseExpiryDate = licenseExpiryDate;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAdress() {
        return adress;
    }

    public void setAdress(String adress) {
        this.adress = adress;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "Driver : " +
                "id=" + id +
                ", name :" + name + '\'' +
                ", cnh :" + cnh + '\'' +
                ", cpf :" + cpf + '\'' +
                ", licenseCategory :" + licenseCategory + '\'' +
                ", licenseExpiryDate :" + licenseExpiryDate + '\'' +
                ", phone :" + phone + '\'' +
                ", email :" + email + '\'' +
                ", adress :" + adress + '\'' +
                ", status :" + status + '\'' ;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    @Column(nullable = false, unique = true)
    private String cnh;
    @Column(nullable = false, unique = true)
    private String cpf;
    @Column(nullable = false)
    private String licenseCategory;
    @Column(nullable = false)
    private String licenseExpiryDate;
    @Column(nullable = false, unique = true)
    private String phone;
    private String email;
    private String adress;
    @Column(nullable = false)
    private String status;
}
