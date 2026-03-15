package LimaSantosSoftware.DriveControl.models;

import jakarta.persistence.*;

@Entity
@Table(name = "Drivers")

public class Driver {
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
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private DriverStatus status;
    @ManyToOne // a driver can use a lot of rental ( but only one at a time)
    private Rental rental;

    private enum DriverStatus {
        AVAILABLE,
        RENTED,
        ON_HOLD,
        INACTIVE
    }

    public Driver(long id, String name,
                  String cnh, String cpf,
                  String licenseCategory,
                  String licenseExpiryDate,
                  String email, String phone,
                  String adress, DriverStatus status,
                  Rental rental)
    {
        this.id = id;
        this.name = name;
        this.cnh = cnh;
        this.cpf = cpf;
        this.licenseCategory = licenseCategory;
        this.licenseExpiryDate = licenseExpiryDate;
        this.email = email;
        this.phone = phone;
        this.adress = adress;
        this.status = status;
        this.rental = rental;
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

    public DriverStatus getStatus() {
        return status;
    }

    public void setStatus(DriverStatus status) {
        this.status = status;
    }


}
