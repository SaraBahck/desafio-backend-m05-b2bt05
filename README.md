# Sistema de Ponto de Venda

<img alt="Status Em Desenvolvimento" src="https://img.shields.io/badge/Status-Em%20Desenvolvimento-brightgreen">

---

## 📌Sobre o projeto

Projeto piloto de desenvolvimento de uma API para um PDV (Frente de Caixa), realizado como projeto final do curso de Desenvolvimento de Software com Foco em Back-end da Cubos Academy.

### Acesso ao sistema:

Você pode acessar e usar nossa aplicação diretamente através do link de deploy:

> [PDV - Acesse Aqui](https://witty-worm-tank-top.cyclic.app/)

---

## 📌Funcionalidades

- Listar categorias;
- Cadastrar Usuário;
- Efetuar Login do Usuário;
- Detalhar Perfil do Usuário Logado;
- Editar Perfil do Usuário Logado;

---

## 📌Utilização

Para uma utilização eficiente da nossa aplicação, listaremos abaixo todos os endpoints com suas funcionalidades e devidas rotas.

### 1. Listar categoria

Endpoint: `GET /categoria`

> Este endpoint permite que os usuários listem as categorias cadastradas.

---

### 2. Cadastrar Usuário

Endpoint: `POST /usuario`

> Este endpoint permite que os usuários registrem um novo usuário no sistema.

#### Corpo da requisição:

```JSON
{
  "nome": "Nome do Usuário",
  "email": "email@exemplo.com",
  "senha": "senha123"
}
```

#### Observação: todos os campos são obrigatórios.

---

### 3. Efetuar Login do Usuário

Endpoint: `POST /login`

> Permite que um usuário cadastrado realize o login no sistema.

#### Corpo da requisição:

```JSON
{
  "email": "email@exemplo.com",
  "senha": "senha123"
}
```

#### Observação: Após realizar o login com sucesso, um token será retornado. Esse token deve ser utilizado para autenticação nos próximos endpoints, pois eles são protegidos.

---

### 4. Detalhar Perfil do Usuário Logado

Endpoint: `GET /usuario`

> Este endpoint permite que um usuário visualize o seu perfil de forma detalhada.

#### Header:

- Authorization: Bearer SEU_TOKEN

---

### 5.Editar Perfil do Usuário Logado

Endpoint: `PUT /usuario`

> Este endpoint permite que um usuário logado atualize as informações do seu perfil.

#### Header:

- Authorization: Bearer SEU_TOKEN

#### Corpo da requisição:

```JSON
{
  "nome": "Novo Nome",
  "email": "novo-email@exemplo.com",
  "senha": "novaSenha"
}
```

#### Observação: Todos os campos são obrigatórios.

---

## 📌Tecnologias

#### As seguintes ferramentas foram usadas na construção do projeto:

#### **Server** ([NodeJS](https://nodejs.org/en/))

- **[Express](https://expressjs.com/)**
- **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
- **[bcrypt](https://www.npmjs.com/package/bcrypt)**
- **[jsonwebtoken](https://jwt.io/)**
- **[KnexJS](http://knexjs.org/)**
- **[dotENV](https://github.com/motdotla/dotenv)**

> Veja o arquivo [package.json](https://github.com/SaraBahck/desafio-backend-m05-b2bt05-equipe07/blob/main/package.json)

#### **Utilitários**

- Deploy: **[API](https://witty-worm-tank-top.cyclic.app/)**
- Editor: **[Visual Studio Code](https://code.visualstudio.com/)**
- Teste de API: **[Insomnia](https://insomnia.rest/)**

---

## Autoras

<table>
  <tr>
    <td align="center"><a href="https://github.com/Danifeares"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/117787402?v=4" width="100px;" alt=""/><br /><sub><b>Daniela Felipe Soares</b></sub></a><br /><a href="https://github.com/Danifeares">👩‍💻</a></td>
	  <td align="center"><a href="https://github.com/GessycaBorges"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/124705468?v=4" width="100px;" alt=""/><br /><sub><b>Gessyca Borges</b></sub></a><br /><a href="https://github.com/GessycaBorges">👩‍💻</a></td>
    <td align="center"><a href="https://github.com/mirellaor"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/125171061?v=4" width="100px;" alt=""/><br /><sub><b>Mirella Rebouças</b></sub></a><br /><a href="https://github.com/mirellaor">👩‍💻</a></td>
    <td align="center"><a href="https://github.com/Nataliasalles1"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/109856255?v=4" width="100px;" alt=""/><br /><sub><b>Natalia Salles</b></sub></a><br /><a href="https://github.com/Nataliasalles1">👩‍💻</a></td>
    <td align="center"><a href="https://github.com/SaraBahck"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/100784417?v=4" width="100px;" alt=""/><br /><sub><b>Sara Webery</b></sub></a><br /><a href="https://github.com/SaraBahck">👩‍💻</a></td> 
    
  </tr>
</table>
