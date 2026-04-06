# GestorFrota Frontend

Frontend Angular para o sistema de gestão de aluguel de veículos.

## Pré-requisitos

- Node.js 18+ 
- npm 9+

## Instalação

```bash
cd frontend
npm install
```

## Desenvolvimento

```bash
npm start
```

O aplicativo estará disponível em `http://localhost:4200`

## Build de Produção

```bash
npm run build
```

Os arquivos de produção serão gerados na pasta `dist/`.

## Estrutura do Projeto

```
frontend/
├── src/
│   ├── app/
│   │   ├── components/       # Componentes da aplicação
│   │   │   ├── header/       # Cabeçalho com navegação
│   │   │   ├── login/        # Página de login
│   │   │   ├── registro/     # Página de registro
│   │   │   ├── dashboard/    # Dashboard principal
│   │   │   ├── veiculos/     # Gestão de veículos
│   │   │   ├── motoristas/   # Gestão de motoristas
│   │   │   └── alugueis/     # Gestão de aluguéis
│   │   ├── services/         # Serviços
│   │   │   ├── auth.service.ts  # Autenticação e JWT
│   │   │   └── api.service.ts   # API REST
│   │   ├── guards/           # Guards de rota
│   │   │   └── auth.guard.ts
│   │   ├── app.component.ts
│   │   └── app.routes.ts
│   ├── styles.scss           # Estilos globais
│   └── main.ts
├── angular.json
├── package.json
├── proxy.conf.json           # Proxy para API backend
└── tsconfig.json
```

## Funcionalidades

- **Login/Registro**: Autenticação com JWT
- **Dashboard**: Visão geral do sistema
- **Veículos**: CRUD completo (apenas Gestor)
- **Motoristas**: CRUD completo (apenas Gestor)
- **Aluguéis**: CRUD completo (apenas Gestor)

## Níveis de Acesso

- **OPERADOR**: Apenas visualização
- **GESTOR**: CRUD completo em todas as entidades
