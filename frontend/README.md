# GestorFrota Frontend

> Interface Angular 18 para o sistema de gestao de aluguel de veiculos DriveControl.

## Stack

- **Angular 18** — componentes standalone, lazy loading, guards
- **TypeScript** — tipagem forte nos servicos e componentes
- **SCSS + CSS Custom Properties** — design system com tema claro/escuro
- **Angular Router** — rotas protegidas com `authGuard`
- **HttpInterceptor** — injecao automatica de Bearer token JWT

## Estrutura

```
src/app/
 +- components/
 |    +- dashboard/     Cards metricas + graficos de aluguéis, receitas, ranking veiculos
 |    +- veiculos/      CRUD com tabela, modal e confirmacao
 |    +- motoristas/    CRUD com avatares iniciais e formulario
 |    +- alugueis/      CRUD com selecao de veiculo/motorista, deteccao de conflitos
 |    +- login/         Autenticacao com loading e feedback toast
 |    +- registro/      Registro de usuarios com selecao de role
 |
 +- shared/
 |    +- components/
 |    |    +- sidebar/           Navegacao colapsavel com icones SVG
 |    |    +- toast-container/   Notificacoes animadas
 |    +- services/
 |         +- theme.service.ts   Toggle dark/light com localStorage + prefers-color-scheme
 |         +- toast.service.ts   Sistema de notificacoes com BehaviorSubject
 |
 +- services/
 |    +- auth.service.ts   Login, registro, guard de sessao e role
 |    +- api.service.ts    Cliente HTTP para todos os endpoints
 |
 +- guards/
 |    +- auth.guard.ts     Protecao de rotas
 |
 +- interceptors/
 |    +- auth.interceptor.ts  Injecao do Authorization: Bearer <token>
```

## Instalacao

```bash
npm install
```

## Desenvolvimento

```bash
ng serve
```

Disponivel em `http://localhost:4200`

As requisicoes sao redirecionadas ao backend em `http://localhost:8080` via `proxy.conf.json`. Certifique-se de que o Spring Boot esteja rodando.

## Build de Producao

```bash
ng build
```

Output em `dist/gestorfrota-frontend/`

## Funcionalidades

### Autenticacao
- Login com JWT armazenado em `localStorage`
- Registro com selecao de role (GESTOR/OPERADOR)
- Interceptor HTTP injeta `Bearer <token>` automaticamente
- Guard redireciona para `/login` se nao autenticado

### Dashboard
- 4 cards de metricas (motoristas, veiculos, aluguéis ativos, receita)
- Grafico de barras — aluguéis por mes (ultimos 12 meses)
- Grafico de pizza — status de veiculos (disponivel, alugado, manutencao)
- Grafico de linha — receita mensal
- Grafico horizontal — top 5 veiculos mais alugados
- Tabela dos ultimos 10 aluguéis com status coloridos

### CRUD Pages
- Tabela com dados reais da API
- Modal para criacao e edicao
- Acoes restritas ao perfil Gestor
- Feedback visual via toasts (sucesso, erro, aviso, info)
- Deteccao de conflitos de aluguel com mensagem inline

### Tema Escuro
- Toggle sol/lua no topbar
- Persistencia em `localStorage`
- Deteccao automatica via `prefers-color-scheme`
- Script inline no `index.html` para evitar flash de tela branca
- Transicao suave de 0.3s em todas as superficies

## Design System

Variaveis CSS em `styles.scss` com paleta completa:

| Categoria | Escala |
|-----------|--------|
| Primarias | 50 ate 700 (indigo) |
| Neutras | gray-50 ate gray-900 |
| Status | sucesso, alerta, erro, info |
| Componentes | botoes, badges, cards, modals, inputs, tabelas |
| Animacoes | fadeIn, slideUp, slideInRight, spin, shimmer |

## Niveis de Acesso

| Perfil | Permissoes |
|--------|-----------|
| OPERADOR | Visualizacao de dados |
| GESTOR | CRUD completo em veiculos, motoristas e aluguéis |

---

**Guilherme Lima Santos**
[GitHub](https://github.com/codebylimasantos)