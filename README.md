# GestorFrota - Sistema de Gestão de Frotas

> **Sistema fullstack de gestão de aluguel de veículos** com Spring Boot 3 no backend e Angular 18 no frontend.

<div align="center">

[![Java](https://img.shields.io/badge/Java-17-orange.svg)](https://openjdk.java.net/)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.4.4-brightgreen.svg)](https://spring.io/projects/spring-boot)
[![Spring Security](https://img.shields.io/badge/Spring%20Security-6.2-green.svg)](https://spring.io/projects/spring-security)
[![Angular](https://img.shields.io/badge/Angular-18-red.svg)](https://angular.io/)
[![MySQL](https://img.shields.io/badge/MySQL-8-blue.svg)](https://www.mysql.com/)
[![Swagger](https://img.shields.io/badge/Swagger-OpenAPI%203.0-85EA2D.svg)](https://swagger.io/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

[Sobre](#sobre-o-projeto) • [Funcionalidades](#funcionalidades) • [Tech Stack](#tech-stack) • [Como Usar](#como-usar) • [API Docs](#documentação-da-api) • [Arquitetura](#arquitetura)

</div>

---

## 📋 Sobre o Projeto

**GestorFrota** é uma aplicação fullstack completa para gerenciamento de frotas e aluguéis de veículos. O sistema permite:

- 📱 Gerenciar frotas de veículos
- 👥 Administrar motoristas  
- 📅 Controlar aluguéis e agendamentos
- 🔐 Autenticação segura com JWT
- 👨‍💼 Controle de acesso baseado em roles (RBAC)
- 📊 Dashboard com estatísticas
- 🎨 Interface moderna e responsiva
- 📚 **Documentação completa com Swagger/OpenAPI**

---

## ✨ Funcionalidades

### ✅ Autenticação e Segurança
- Login e registro de usuários
- Autenticação JWT com tokens seguros
- Controle de acesso baseado em roles:
  - **ROLE_GESTOR**: Acesso completo (CRUD)
  - **ROLE_OPERATOR**: Apenas leitura

### ✅ Gerenciamento de Veículos
- Cadastro de veículos com detalhes (marca, modelo, ano, placa, combustível, etc.)
- Controle de status (DISPONÍVEL, ALUGADO, MANUTENÇÃO)
- Histórico de aluguéis por veículo
- Validação de conflitos de aluguel

### ✅ Gerenciamento de Motoristas
- Cadastro de motoristas com CNH e CPF
- Verificação de documentação válida
- Status de disponibilidade
- Contato e informações de seguro

### ✅ Gerenciamento de Aluguéis
- Criação de contratos de aluguel
- Validação automática de disponibilidade (veículo + motorista)
- Prevenção de conflitos (mesmo veículo/motorista no mesmo período)
- Rastreamento de status (ATIVO, COMPLETADO, CANCELADO)
- Cálculo automático de valor

### ✅ Dashboard
- Estatísticas de frotas
- Aluguéis ativos e inativos
- Relatórios rápidos
- Visualização em tempo real

### ✅ Documentação Swagger
- API completamente documentada
- Interface interativa para testes
- Documentação de todos os endpoints

### ✅ Interface
- Design moderno e intuitivo
- Modo escuro/claro com persistência local
- 100% responsivo (mobile, tablet, desktop)
- Tema personalizado com CSS variables

---

## 🛠️ Tech Stack

### Backend
| Componente | Tecnologia | Versão |
|-----------|-----------|--------|
| **Linguagem** | Java | 17+ |
| **Framework** | Spring Boot | 3.4.4 |
| **Segurança** | Spring Security + JWT | 6.2 |
| **ORM** | Spring Data JPA + Hibernate | 6.6 |
| **API Doc** | SpringDoc OpenAPI (Swagger) | 2.0.2 |
| **Validação** | Jakarta Bean Validation | 3.0 |
| **Build** | Maven | 3.8+ |
| **Banco** | MySQL 8 / H2 | Latest |
| **Utilitários** | Lombok, Auth0 JWT | Latest |

### Frontend
| Componente | Tecnologia | Versão |
|-----------|-----------|--------|
| **Framework** | Angular | 18 |
| **Linguagem** | TypeScript | 5.2+ |
| **Styling** | SCSS + CSS Variables | - |
| **HTTP Client** | HttpClientModule | Built-in |
| **Router** | Angular Router | 18 |
| **Build** | Angular CLI | 18 |

### Banco de Dados
- **Produção**: MySQL 8+
- **Desenvolvimento**: H2 (em memória)

---

## 🚀 Como Usar

### Pré-requisitos
- **Java 17+**: [Download](https://openjdk.java.net/)
- **Node.js 18+**: [Download](https://nodejs.org/)
- **MySQL 8+**: [Download](https://www.mysql.com/downloads/)
- **Git**: [Download](https://git-scm.com/)

### Setup Backend

#### 1️⃣ Clone o repositório
```bash
git clone https://github.com/codebylimasantos/DriveControl.git
cd DriveControl
```

#### 2️⃣ Configure o banco de dados
Crie o banco MySQL:
```sql
CREATE DATABASE GestorFrota;
USE GestorFrota;
```

#### 3️⃣ Configure as variáveis de ambiente (opcional)
```bash
# Linux/macOS
export JWT_SECRET="sua-chave-secreta-aqui"

# Windows PowerShell
$env:JWT_SECRET="sua-chave-secreta-aqui"
```

#### 4️⃣ Compile e rode o backend
```bash
# Windows
mvnw.cmd spring-boot:run

# Linux/macOS
./mvnw spring-boot:run
```

✅ Backend disponível em: **http://localhost:8080**

### Setup Frontend

#### 1️⃣ Navegue até o frontend
```bash
cd frontend
```

#### 2️⃣ Instale as dependências
```bash
npm install
```

#### 3️⃣ Inicie o servidor de desenvolvimento
```bash
ng serve
# ou
npm start
```

✅ Frontend disponível em: **http://localhost:4200**

### 🔗 Build para Produção

**Backend:**
```bash
mvnw.cmd package -DskipTests
java -jar target/drivecontrol-0.0.1-SNAPSHOT.jar
```

**Frontend:**
```bash
ng build --configuration production
# Arquivos gerados em: dist/gestorfrota-frontend/
```

---

##  Documentação da API

### Swagger UI
Acesse a documentação interativa em:
```
http://localhost:8080/swagger-ui.html
```

### 📋 Especificações OpenAPI
- **JSON**: `http://localhost:8080/v3/api-docs`
- **YAML**: `http://localhost:8080/v3/api-docs.yaml`

### 🔐 Autenticação
Todos os endpoints, exceto `/Auth/login` e `/Auth/register`, requerem o header:
```
Authorization: Bearer <seu-jwt-token>
```

---

## 🗺️ Endpoints da API

### 🔓 Autenticação (Público)
| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `POST` | `/Auth/login` | Login e retorna JWT token |
| `POST` | `/Auth/register` | Registra novo usuário |

### 🚗 Veículos
| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `GET` | `/Vehicles/all` | Lista todos os veículos |
| `GET` | `/Vehicles/search/{id}` | Busca veículo por ID |
| `POST` | `/Vehicles/Register` | Cria novo veículo |
| `PUT` | `/Vehicles/Change/{id}` | Atualiza veículo |
| `DELETE` | `/Vehicles/Delete/{id}` | Deleta veículo |

### 👥 Motoristas
| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `GET` | `/Drivers/all` | Lista todos os motoristas |
| `GET` | `/Drivers/search/{id}` | Busca motorista por ID |
| `POST` | `/Drivers/Register` | Cria novo motorista |
| `PUT` | `/Drivers/Change/{id}` | Atualiza motorista |
| `DELETE` | `/Drivers/Delete/{id}` | Deleta motorista |

### 📅 Aluguéis
| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `GET` | `/rentals/all` | Lista todos os aluguéis |
| `GET` | `/rentals/{id}` | Busca aluguel por ID |
| `POST` | `/rentals/Register` | Cria novo aluguel |
| `PUT` | `/rentals/{id}` | Atualiza aluguel |
| `DELETE` | `/rentals/{id}` | Deleta aluguel |

### 📊 Dashboard
| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `GET` | `/dashboard/*` | Dados para dashboard |

---

## 🏗️ Arquitetura

### Padrão MVC Multicamadas

```
┌─────────────────────────────────────────────────────────────┐
│                     Frontend (Angular)                      │
│         (Components, Guards, Interceptors, Services)         │
└────────────────┬────────────────────────────────────────────┘
                 │ HTTP / REST API
┌────────────────▼────────────────────────────────────────────┐
│                   Backend (Spring Boot)                     │
├─────────────────────────────────────────────────────────────┤
│ Controllers (REST Endpoints + Swagger)                      │
├─────────────────────────────────────────────────────────────┤
│ Services (Business Logic)                                   │
├─────────────────────────────────────────────────────────────┤
│ Mappers (DTO ↔ Entity Conversion)                           │
├─────────────────────────────────────────────────────────────┤
│ Repositories (Spring Data JPA)                              │
├─────────────────────────────────────────────────────────────┤
│ Models (JPA Entities)                                       │
└────────────────┬────────────────────────────────────────────┘
                 │ JDBC
┌────────────────▼────────────────────────────────────────────┐
│              Database (MySQL / H2)                          │
└─────────────────────────────────────────────────────────────┘
```

### Estrutura de Diretórios (Backend)

```
src/main/java/LimaSantosSoftware/DriveControl/
├── DriveControlApplication.java          # Entry point
├── Auth/
│   ├── AuthenticationController.java     # @Tag("Authentication")
│   ├── AuthenticationDTO.java
│   └── LoginResponseDTO.java
│
├── controller/                           # REST Endpoints
│   ├── VehicleController.java            # @Tag("Vehicles")
│   ├── DriverController.java             # @Tag("Drivers")
│   ├── RentalController.java             # @Tag("Rentals")
│   └── DashboardController.java
│
├── Services/                             # Lógica de Negócio
│   ├── VehicleService.java
│   ├── DriverService.java
│   ├── RentalService.java
│   ├── AuthenticationService.java
│   └── DashboardService.java
│
├── models/                               # Entidades JPA
│   ├── Vehicle.java
│   ├── Driver.java
│   ├── Rental.java
│   ├── User.java
│   └── RoleUser.java
│
├── DTO/                                  # Data Transfer Objects
│   ├── VehicleDTO.java
│   ├── DriverDTO.java
│   ├── RentalDTO.java
│   └── RegisterDTO.java
│
├── Mapper/                               # Conversão DTO ↔ Entity
│   ├── VehicleMapper.java
│   ├── DriverMapper.java
│   └── RentalMapper.java
│
├── repository/                           # Spring Data JPA
│   ├── VehicleRepository.java
│   ├── DriverRepository.java
│   ├── RentalRepository.java
│   └── UserRepository.java
│
└── infra/
    ├── config/
    │   └── SwaggerConfig.java            # Configuração Swagger ✨
    └── security/
        ├── SecurityConfig.java           # Spring Security
        ├── SecurityFilter.java           # JWT Filter
        └── TokenService.java             # JWT Generation/Validation
```

---

## 💾 Modelos de Dados

### Vehicle (TB_VEHICLES)
```
id (PK) → placa (UNIQUE) → marca → modelo → ano → cor
→ combustivel → quilometragem → valorSemanal → status
```

### Driver (TB_DRIVERS)
```
id (PK) → nome → cpf (UNIQUE) → cnh (UNIQUE) → categoriaHabilitacao
→ validadeCNH → telefone → email → status
```

### Rental (TB_RENTALS)
```
id (PK) → vehicle_id (FK) → driver_id (FK) → dataInicio
→ dataFim → valorTotal → status
```

### User (TB_USERS)
```
id (UUID PK) → username (UNIQUE) → email → password (BCrypt) → role
```

---

## 🔐 Fluxo de Autenticação

1. Usuário faz login com username + password
2. Backend valida credenciais contra `User` table
3. Se válido, gera JWT token com `TokenService`
4. Cliente armazena token no `localStorage`
5. Interceptor adiciona `Authorization: Bearer <token>` em todas as requisições
6. `SecurityFilter` valida token em cada requisição
7. Se inválido ou expirado, retorna `401 Unauthorized`

---

## 🛡️ Segurança

### Implementações
- ✅ **Senhas**: Criptografadas com BCrypt
- ✅ **JWT**: Tokens com expiração configurável
- ✅ **CORS**: Configurado para múltiplas origens
- ✅ **RBAC**: Controle de acesso por role (GESTOR, OPERATOR)
- ✅ **Spring Security**: Validação em todos os endpoints
- ✅ **CSRF**: Desabilitado para API RESTful
- ✅ **Swagger**: Protegido com JWT

### Boas Práticas
- Nunca commitar `JWT_SECRET` no repositório
- Usar HTTPS em produção
- Validar todos os inputs no backend
- Rotacionar tokens regularmente
- Implementar rate limiting

---

## 📈 Implementações Futuras

- [ ] Histórico de aluguéis exportável (PDF)
- [ ] Integração com API de localização GPS
- [ ] Relatórios avançados e analytics
- [ ] Notificações por email (aluguel expirando, manutenção, etc.)
- [ ] Audit Trails para rastrear mudanças
- [ ] Mobile app (React Native / Flutter)
- [ ] Testes automatizados completos
- [ ] CI/CD pipeline

---


##  Licença

Este projeto é licenciado sob a MIT License.

---

## Developed by:

**Guilherme Lima Santos**

[![GitHub](https://img.shields.io/badge/GitHub-Profile-black?style=flat-square&logo=github)](https://github.com/codebylimasantos)
[![Email](https://img.shields.io/badge/Email-Contact-red?style=flat-square&logo=gmail)](mailto:guilimadev19@gmail.com)
[![Website](https://img.shields.io/badge/Website-Visit-blue?style=flat-square&logo=globe)](https://limasantos.netlify.app)

---

