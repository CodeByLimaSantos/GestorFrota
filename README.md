# GestorFrota

> API RESTful para gerenciamento de frota e locação de veículos desenvolvida com Spring Boot.

[![Java](https://img.shields.io/badge/Java-17-orange.svg)](https://openjdk.java.net/)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.4.4-brightgreen.svg)](https://spring.io/projects/spring-boot)
[![Maven](https://img.shields.io/badge/Maven-3.0+-blue.svg)](https://maven.apache.org/)

## Sobre o Projeto

O **GestorFrota** é um sistema completo de gestão de frota que permite o controle de veículos, motoristas e aluguéis. Desenvolvido como uma API RESTful com arquitetura em camadas bem definida, utilizando DTOs, Mappers, Services e Controllers para melhor organização, manutenibilidade e separação de responsabilidades.

---

## Arquitetura do Sistema

### Visão Geral

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           API REST (HTTP)                               │
└─────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                         CONTROLLER LAYER                                │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐         │
│  │ vehicleController│  │ driverController│  │ rentalController│         │
│  │ /Vehicles       │  │ /Drivers        │  │ /rentals        │         │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘         │
└─────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                          SERVICE LAYER                                  │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐         │
│  │ VehicleService  │  │ DriverService   │  │ RentalService   │         │
│  │ UserService     │  └─────────────────┘  └─────────────────┘         │
└─────────────────────────────────────────────────────────────────────────┘
                                    │
                    ┌───────────────┴───────────────┐
                    ▼                               ▼
┌─────────────────────────┐           ┌─────────────────────────┐
│     MAPPER LAYER        │           │     REPOSITORY LAYER    │
│  ┌───────────────────┐  │           │  ┌───────────────────┐  │
│  │ VehicleMapper     │  │           │  │ VehicleRepository │  │
│  │ DriverMapper      │  │           │  │ DriverRepository  │  │
│  │ RentalMapper      │  │           │  │ RentalRepository  │  │
│  └───────────────────┘  │           │  │ UserRepository    │  │
│                         │           │  └───────────────────┘  │
└─────────────────────────┘           └─────────────────────────┘
                    │                               │
                    ▼                               ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                           DATA LAYER                                    │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐  ┌────────────┐        │
│  │ Vehicle    │  │ Driver     │  │ Rental     │  │ User       │        │
│  │ (Entity)   │  │ (Entity)   │  │ (Entity)   │  │ (Entity)   │        │
│  └────────────┘  └────────────┘  └────────────┘  └────────────┘        │
└─────────────────────────────────────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                        DATABASE (H2 / MySQL)                            │
│                    TB_VEHICLES | TB_DRIVERS | TB_RENTALS | TB_USERS     │
└─────────────────────────────────────────────────────────────────────────┘
```

### Fluxo de Dados (Request/Response)

```
┌──────────┐     ┌──────────┐     ┌──────────┐     ┌──────────┐     ┌──────────┐
│  Client  │ ──► │ Controller│ ──► │ Service  │ ──► │ Mapper   │ ──► │  Entity  │
│  (HTTP)  │     │  (REST)   │     │  (Logic) │     │ (DTO↔E)  │     │  (JPA)   │
└──────────┘     └──────────┘     └──────────┘     └──────────┘     └──────────┘
                     │                │                │                │
                     ▼                ▼                ▼                ▼
              ResponseEntity    Business Rules    Data Transfer    Persistence
              Status Codes      Validation        Objects          & DB Access
```

---

## Estrutura de Diretórios

```
DriveControl/
├── src/
│   ├── main/
│   │   ├── java/LimaSantosSoftware/DriveControl/
│   │   │   ├── DriveControlApplication.java    # Ponto de entrada
│   │   │   │
│   │   │   ├── controller/                     # Camada de API REST
│   │   │   │   ├── vehicleController.java      # GET/POST/PUT/DELETE /Vehicles
│   │   │   │   ├── driverController.java       # GET/POST/PUT/DELETE /Drivers
│   │   │   │   ├── rentalController.java       # GET/POST/PUT/DELETE /rentals
│   │   │   │   └── userController.java         # (Em implementação)
│   │   │   │
│   │   │   ├── Services/                       # Regras de Negócio
│   │   │   │   ├── VehicleService.java
│   │   │   │   ├── DriverService.java
│   │   │   │   ├── RentalService.java
│   │   │   │   └── UserService.java
│   │   │   │
│   │   │   ├── repository/                     # Acesso a Dados (JPA)
│   │   │   │   ├── VehicleRepository.java
│   │   │   │   ├── DriverRepository.java
│   │   │   │   ├── RentalRepository.java
│   │   │   │   └── UserRepository.java
│   │   │   │
│   │   │   ├── models/                         # Entidades JPA
│   │   │   │   ├── Vehicle.java                # TB_VEHICLES
│   │   │   │   ├── Driver.java                 # TB_DRIVERS
│   │   │   │   ├── Rental.java                 # TB_RENTALS
│   │   │   │   ├── User.java                   # TB_USERS
│   │   │   │   └── RoleUser.java               # Enum de roles
│   │   │   │
│   │   │   ├── DTO/                            # Data Transfer Objects
│   │   │   │   ├── VehicleDTO.java
│   │   │   │   ├── DriverDTO.java
│   │   │   │   └── RentalDTO.java
│   │   │   │
│   │   │   ├── Mapper/                         # Conversão DTO ↔ Entity
│   │   │   │   ├── VehicleMapper.java
│   │   │   │   ├── DriverMapper.java
│   │   │   │   └── RentalMapper.java
│   │   │   │
│   │   │   └── DatabaseSettings/
│   │   │       └── MySQLDemo.java
│   │   │
│   │   └── resources/
│   │       └── application.properties          # Configurações
│   │
│   └── test/
│       └── java/LimaSantosSoftware/DriveControl/
│           └── DriveControlApplicationTests.java
│
├── pom.xml                                     # Dependências Maven
├── mvnw / mvnw.cmd                             # Maven Wrapper
└── README.md
```

---

## Modelos de Dados (Entities)

### Vehicle (TB_VEHICLES)

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | Long | ID gerado sequencialmente |
| licensePlate | String | Placa do veículo (única) |
| make | String | Marca |
| model | String | Modelo |
| year | int | Ano |
| color | String | Cor |
| fuelType | String | Tipo de combustível |
| mileage | int | Quilometragem |
| weekRate | BigDecimal | Valor semanal |
| status | Enum | AVAILABLE, RENTED, MAINTENANCE |
| rental | Rental | Relacionamento com aluguel |

### Driver (TB_DRIVERS)

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | Long | ID gerado sequencialmente |
| name | String | Nome completo |
| cnh | String | CNH (única) |
| cpf | String | CPF (único) |
| licenseCategory | String | Categoria da habilitação |
| licenseExpiryDate | String | Validade da CNH |
| phone | String | Telefone |
| email | String | E-mail |
| adress | String | Endereço |
| status | Enum | ACTIVE, RENTED, ON_HOLD, INACTIVE |
| rental | Rental | Relacionamento com aluguel |

### Rental (TB_RENTALS)

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | Long | ID gerado sequencialmente |
| vehicle | Vehicle | Veículo alugado |
| driver | Driver | Motorista responsável |
| startDate | LocalDate | Data de início |
| endDate | LocalDate | Data de fim |
| status | Enum | ACTIVE, COMPLETED, CANCELLED |

### User (TB_USERS)

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | UUID | ID único (UUID) |
| username | String | Nome de usuário (único) |
| email | String | E-mail (único) |
| passwordHash | String | Senha criptografada |
| roles | Set<RoleUser> | Roles/Permissões |

---

## DTOs (Data Transfer Objects)

Os DTOs são utilizados para transferir dados entre as camadas sem expor as entidades diretamente:

- **VehicleDTO** - Dados de veículos (com rentalId em vez do objeto completo)
- **DriverDTO** - Dados de motoristas
- **RentalDTO** - Dados de aluguéis (com vehicleId e driverId em vez dos objetos)

---

## Mappers

Responsáveis pela conversão entre DTO e Entity:

| Mapper | Função |
|--------|--------|
| VehicleMapper | VehicleDTO ↔ Vehicle (converte Enum ↔ String) |
| DriverMapper | DriverDTO ↔ Driver |
| RentalMapper | RentalDTO ↔ Rental (resolve relacionamentos por ID) |

---

## Endpoints da API

### Veículos (`/Vehicles`)

| Método | Endpoint | Descrição | Status |
|--------|----------|-----------|--------|
| GET | `/Vehicles/all` | Lista todos os veículos | 200 / 204 |
| GET | `/Vehicles/search/{id}` | Busca veículo por ID | 200 / 404 |
| POST | `/Vehicles/Register` | Cadastra novo veículo | 201 |
| PUT | `/Vehicles/Change/{id}` | Atualiza veículo | 200 / 404 |
| DELETE | `/Vehicles/Delete/{id}` | Exclui veículo | 200 / 404 |

### Motoristas (`/Drivers`)

| Método | Endpoint | Descrição | Status |
|--------|----------|-----------|--------|
| GET | `/Drivers/all` | Lista todos os motoristas | 200 / 204 |
| GET | `/Drivers/search/{id}` | Busca motorista por ID | 200 / 404 |
| POST | `/Drivers/Register` | Cadastra novo motorista | 201 |
| PUT | `/Drivers/Change/{id}` | Atualiza motorista | 200 / 404 |
| DELETE | `/Drivers/Delete/{id}` | Exclui motorista | 200 / 404 |

### Aluguéis (`/rentals`)

| Método | Endpoint | Descrição | Status |
|--------|----------|-----------|--------|
| GET | `/rentals/all` | Lista todos os aluguéis | 200 / 204 |
| GET | `/rentals/{id}` | Busca aluguel por ID | 200 / 404 |
| PUT | `/rentals/{id}` | Atualiza aluguel | 200 / 404 |
| DELETE | `/rentals/{id}` | Exclui aluguel | 200 / 404 |

---

## Tecnologias Utilizadas

- **Java 17** - Linguagem principal
- **Spring Boot 3.4.4** - Framework principal
- **Spring Web MVC** - API REST
- **Spring Data JPA** - Persistência de dados
- **Hibernate** - ORM
- **Lombok** - Redução de boilerplate (@Data, @Entity, etc.)
- **H2 Database** - Banco em memória (desenvolvimento)
- **MySQL 8** - Banco de dados (produção)
- **Maven** - Gerenciamento de dependências

---

## Pré-requisitos

- Java 17 ou superior
- Maven 3.0+

---

## Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/codebylimasantos/GestorFrota.git
cd GestorFrota
```

### 2. Build e execução

```bash
# Windows
mvnw.cmd clean install
mvnw.cmd spring-boot:run

# Linux/Mac
./mvnw clean install
./mvnw spring-boot:run
```

A API estará disponível em `http://localhost:8080`

---

## Roadmap

- [ ] Implementar autenticação com Spring Security
- [ ] Implementar frontend fullstack com Angular
- [ ] Adicionar validações de negócio (CNH, CPF, datas)
- [ ] Documentação com Swagger/OpenAPI
- [ ] Testes unitários e de integração
- [ ] Dockerização da aplicação

---

## Autor

**Guilherme Lima Santos**

- GitHub: [@codebylimasantos](https://github.com/codebylimasantos)

---

## Licença

Este projeto está sob a licença MIT.

---

<p align="center">
  <strong>Desenvolvido com ☕ Java e Spring Boot</strong>
</p>
