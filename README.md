

> Sistema fullstack de gestao de aluguel de veiculos com Spring Boot 3 no backend e Angular 18 no frontend.

[![Java](https://img.shields.io/badge/Java-17-orange.svg)](https://openjdk.java.net/)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.4.4-brightgreen.svg)](https://spring.io/projects/spring-boot)
[![Angular](https://img.shields.io/badge/Angular-18-red.svg)](https://angular.io/)

## Sobre o Projeto

O **GestorFrota** e uma aplicacao fullstack para gestao de frotas, permitindo o cadastro e gerenciamento de veiculos, motoristas e aluguéis. O backend e uma API RESTful com autenticacao JWT e controle de acesso baseado em roles. O frontend e SPA com Angular 18, tema escuro e interface 100% responsiva.

## Funcionalidades

- CRUD de veiculos, motoristas e aluguéis
- Autenticacao JWT com login e registro de usuarios
- Controle de acesso: **Gestor** faz CRUD completo, **Operador** apenas visualizacao
- Validacao de conflitos de aluguel (mesmo veiculo/motorista no mesmo periodo)
- Tema escuro/claro com persistencia local e deteccao automatica via `prefers-color-scheme`

## Stack

| Camada | Tecnologia |
|--------|-----------|
| Backend | Java 17, Spring Boot 3.4, Spring Security, Spring Data JPA, auth0 java-jwt, Lombok |
| Frontend | Angular 18 (standalone), TypeScript, SCSS (CSS vars) |
| Banco | MySQL 8 (producao), H2 (dev) |
| Build | Maven, Angular CLI |

## Arquitetura do Backend

```
Controller --> Service --> Mapper --> Repository --> DB
```

- **Entidades**: `Vehicle`, `Driver`, `Rental`, `User` com relacionamentos `@ManyToOne`
- **DTOs**: Separam a API das entidades internas; `RentalMapper` resolve `vehicleId` e `driverId` para objetos
- **Seguranca**: `SecurityFilter` intercepta requisicoes, valida JWT via `TokenService`. `User.getAuthorities()` devolve `ROLE_GESTOR` ou `ROLE_OPERATOR`
- **Conflitos**: `RentalService` verifica alugueis ativos por veiculo/motorista antes de criar ou atualizar

## Estrutura

```
DriveControl/
 +- src/main/java/.../DriveControl/
 |    +- controller/       # REST endpoints
 |    +- Services/          # Regras de negocio
 |    +- Mapper/            # DTO <-> Entity
 |    +- models/            # Entidades JPA
 |    +- repository/        # Spring Data JPA
 |    +- DTO/               # Data Transfer Objects
 |    +- infra/security/    # JWT filter, config, token
 |    +- Auth/              # Auth controller e DTOs
 |
 +- frontend/
 |    +- src/app/
 |    |    +- components/    # Paginas da aplicacao
 |    |    +- shared/        # Sidebar, toast, services
 |    |    +- guards/        # auth.guard.ts
 |    |    +- interceptors/  # auth.interceptor.ts
 |    +- package.json
```

## Como Rodar

### Backend

1. Crie o banco MySQL `GestorFrota` (ou ajuste `application.properties`)
2. Defina `JWT_SECRET` como variavel de ambiente (padrao: `my-secret-key`)
3. Rode com o Maven Wrapper:

```bash
./mvnw spring-boot:run        # Linux/macOS
mvnw.cmd spring-boot:run      # Windows
```

API disponivel em `http://localhost:8080`

### Frontend

```bash
cd frontend
npm install
ng serve
```

App disponivel em `http://localhost:4200`

## Endpoints da API

### Autenticacao

| Metodo   | Endpoint            | Descricao               |
|----------|---------------------|-------------------------|
| `POST`   | `/auth/login`       | Login + retorno JWT     |
| `POST`   | `/auth/register`    | Registro de usuario     |

### Veiculos (`/Vehicles`)

| Metodo   | Endpoint                   | Descricao              |
|----------|----------------------------|------------------------|
| `GET`    | `/Vehicles/all`            | Lista todos            |
| `GET`    | `/Vehicles/search/{id}`    | Busca por ID           |
| `POST`   | `/Vehicles/Register`       | Cria novo              |
| `PUT`    | `/Vehicles/Change/{id}`    | Atualiza               |
| `DELETE` | `/Vehicles/Delete/{id}`    | Exclui                 |

### Motoristas (`/Drivers`) -- Mesmos padroes

### Aluguéis (`/rentals`)

| Metodo   | Endpoint                   | Descricao                   |
|----------|----------------------------|-----------------------------|
| `GET`    | `/rentals/all`             | Lista todos                 |
| `GET`    | `/rentals/{id}`            | Busca por ID                |
| `POST`   | `/rentals/Register`        | Cria novo                   |
| `PUT`    | `/rentals/{id}`            | Atualiza                    |
| `DELETE` | `/rentals/{id}`            | Exclui                      |

## Modelos

**Vehicle** (`TB_VEHICLES`) -- placa (unico), marca, modelo, ano, cor, combustivel, km, valor semanal, status (`AVAILABLE` / `RENTED` / `MAINTENANCE`)

**Driver** (`TB_DRIVERS`) -- nome, CNH (unico), CPF (unico), categoria, validade, telefone, email, status (`ACTIVE` / `RENTED` / `ON_HOLD` / `INACTIVE`)

**Rental** (`TB_RENTALS`) -- veiculo (FK), motorista (FK), inicio, fim, status (`ACTIVE` / `COMPLETED` / `CANCELLED`)

**User** (`TB_USERS`) -- username, email, senha (BCrypt), role (`ROLE_GESTOR` / `ROLE_OPERATOR`), id UUID

---

**Guilherme Lima Santos**
[GitHub](https://github.com/codebylimasantos) -- Licenca MIT
