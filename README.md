# Cypress - Swag Labs - E2E Tests

Este repositório contém testes end-to-end (E2E) automatizados utilizando Cypress para o site **Swag Labs**. O objetivo deste projeto é validar funcionalidades críticas do **Swag Labs**, garantindo que os fluxos principais, como login, navegação e compra de produtos, estejam funcionando corretamente.

## 🛠️ Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

## 🚀 Como Executar os Testes

### 1️⃣ Pré-requisitos

Antes de começar, certifique-se de ter instalado:
- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [NPM](https://www.npmjs.com/)

### 2️⃣ Instalar Dependências

```sh
npm install
```

### 3️⃣ Executar os Testes

- Para rodar os testes no modo interativo:
  ```sh
  npm cypress open
  ```
  Depois, selecione um navegador e execute os testes.

- Para rodar os testes em modo headless:
  ```sh
  npm cypress run
  ```

## 📝 Testes Implementados

Os testes cobrem os seguintes cenários:
- 🔑 Login válido e inválido
- 🔑 Logout
- 🛍️ Fluxo Completo de Compra
- 🛍️ Fluxo de Compra com Remoção de Produto
- 🛍️ Tentativa de Compra Sem Preencher os dados de usuário obrigatórios

## ⚙️ Integração com GitHub Actions

Este projeto utiliza **GitHub Actions** para executar os testes automaticamente a cada push ou pull request.

### Configuração

O workflow está localizado em `.github/workflows/cypress.yml` e inclui os seguintes passos:
- Instalação das dependências
- Execução dos testes Cypress em modo headless
- Armazenamento de artefatos, como screenshots e vídeos dos testes

### Executando no CI/CD
Os testes são executados automaticamente ao enviar código para o repositório. Para rodá-los manualmente:
```sh
git push origin minha-branch
```
Os resultados podem ser visualizados na aba **Actions** do GitHub.
