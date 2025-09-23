# Gerzhan | Demo TaigaUi

[github.com/gerzhan/gerzhan-demo-taiga-ui](https://github.com/gerzhan/gerzhan-demo-taiga-ui.git)

## Agenda

Демо приложение применения стэка технологий

- Angular (v12)
- Taiga-UI (v3.117.0)
- [angular-auth-oidc-client (v13)](https://github.com/damienbod/angular-auth-oidc-client/tree/version-13)

```bash
# Инициализация проекта
$ng new gerzhan-demo-taiga-ui --version=12
# Установка зависимостей Taiga-UI согласно документации https://taiga-ui.dev/v3/getting-started
$npm i @taiga-ui/cdk@v3.117.0
$npm i @taiga-ui/core@v3.117.0
$npm i @taiga-ui/kit@v3.117.0
$npm i @taiga-ui/icons@v3.117.0
$npm i @taiga-ui/experimental@v3.117.0
$npm install @taiga-ui/addon-doc // Taiga UI based library for developing documentation portals for Angular libraries
# TODO:
$npm i @taiga-ui/addon-charts@v3.117.0    // Components for various charts, graphs and visualizations
$npm i @taiga-ui/addon-commerce@v3.117.0  // Money-related extension with currencies, credit card inputs and validators
# TODO: $npm i @taiga-ui/addon-mobile@v3.117.0    // Components and tools specific to mobile version of the app
$npm i @taiga-ui/addon-table@v3.117.0     // Interactive table component and related utilities
$npm i @taiga-ui/layout@v3.117.0          // Layout components
```

## Local Development

```bash
# запуск в режиме разработки
$ng dev
# генерация кода с cli (code scaffolding)
$ng generate directive|pipe|service|class|guard|interface|enum|module
# сборка приложения в директории `dist/`
$ng build
```

## App generation

### Auth module

- генерация модуля и компонентов

```bash
# модуль упраления авторизацией
$ng g module auth
# Визуальные компоненты
$ng g component auth/SignIn --module auth
$ng g component auth/SignOut --module auth
# сервис упраления авторизацие
$ng g service auth/authEngine
```

- подключение `angular-auth-oidc-client`

```bash
$npm i angular-auth-oidc-client@v13

```

### Logto.io интеграция

`Logto.io` - OIDC Identity Provider

[logto.io + Angular](https://docs.logto.io/quick-starts/angular)

```bash
$npm i @logto/js
```
