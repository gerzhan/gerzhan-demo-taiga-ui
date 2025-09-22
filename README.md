# Gerzhan | Demo TaigaUi

## Agenda

Демо приложение применения стэка технологий

- Angular (v12)
- Taiga-UI (v3.117.0)

```bash
# Инициализация проекта
$ng new gerzhan-demo-taiga-ui --version=12
# Установка зависимостей Taiga-UI согласно документации https://taiga-ui.dev/v3/getting-started
$npm i @taiga-ui/cdk@v3.117.0
$npm i @taiga-ui/core@v3.117.0
$npm i @taiga-ui/kit@v3.117.0
$npm i @taiga-ui/icons@v3.117.0
$npm install @taiga-ui/addon-doc // Taiga UI based library for developing documentation portals for Angular libraries
# TODO:
$npm i @taiga-ui/addon-charts    // Components for various charts, graphs and visualizations
$npm i @taiga-ui/addon-commerce  // Money-related extension with currencies, credit card inputs and validators
$npm i @taiga-ui/addon-mobile    // Components and tools specific to mobile version of the app
$npm i @taiga-ui/addon-table     // Interactive table component and related utilities
$npm i @taiga-ui/layout          // Layout components
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
