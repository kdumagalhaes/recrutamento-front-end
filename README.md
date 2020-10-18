
# Backend Challenge - nuvemWeb

  
  

![](screencapture-localhost-3000-register-2020-10-17-19_06_43.png)

  

## API de autenticação:

Esta API tem o objetivo de realizar a criação, autenticação, criação das tabelas e salvamento de dados no banco.

  

### Ferramentas:

| Ferramenta | Utilidade |
|---|---|
| `Dotenv` | Lib para criação do arquivo para variáveis de ambiente (arquivo ignorado não consta no repo por motivos de segurança). |
| `react-helmet` | Lib que auxilia a montagem do header em React. |
| `styled-components` | Lib de estilização em CSS. |
| `react-toastify` | Lib de notificações para o usuário. |
| `react-promise-tracker` | Lib para acompanhar uma promise de maneira simples. |
| `react-loader-spinner` | Lib com spinners para utilização em conjunto do reac-promise-tracker. |

## Instalação:

- Faça o clone do repo: https://github.com/kdumagalhaes/recrutamento-back-end e siga as instruções no README.

### Instalação do frontend:
```
npm install
```
- Crie o arquivo `.env` na raíz do projeto;
- Declare a chave da API como variável de ambiente no arquivo .env com o seguinte nome: **REACT_APP_API_KEY**
```
npm start
```