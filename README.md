# Sistema de Ponto de Venda

## Acesso ao sistema:
Você pode acessar e usar nossa aplicação PDV diretamente através do link de deploy:

[PDV - Acesse Aqui](https://witty-worm-tank-top.cyclic.app/)

## Utilização
Para uma utilização eficiente da nossa aplicação, listaremos abaixo todos os endpoints com suas funcionalidades e  devidas rotas.

### 1. Listar categoria

#### Endpoint: `GET /categoria`

Este endpoint permite que os usuários listem as categorias cadastradas.

### 2. Cadastrar Usuário

#### Endpoint:  `POST /usuario`
Este endpoint permite que os usuários registrem um novo usuário no sistema.

#### Corpo da requisição:
{
  "nome": "Nome do Usuário",
  "email": "email@exemplo.com",
  "senha": "senha123"
}
#### Observação: todos os campos são obrigatórios.

### 3. Efetuar Login do Usuário

#### Endpoint: `POST /login`

Permite que um usuário cadastrado realize o login no sistema.

#### Corpo da requisição:
{
  "email": "email@exemplo.com",
  "senha": "senha123"
}

#### Observação: Após realizar o login com sucesso, um token será retornado. Esse token deve ser utilizado para autenticação nos próximos endpoints, pois eles são protegidos.

### 4. Detalhar Perfil do Usuário Logado

#### Endpoint: `GET /usuario`
Este endpoint permite que um usuário visualize o seu perfil de forma detalhada.

#### Header:

Authorization: Bearer SEU_TOKEN

### 5.Editar Perfil do Usuário Logado

#### Endpoint: `PUT /usuario`

Este endpoint permite que um usuário logado atualize as informações do seu perfil.

#### Header:

Authorization: Bearer SEU_TOKEN

#### Corpo da requisição:
{
  "nome": "Novo Nome",
  "email": "novo-email@exemplo.com",
  "senha": "novaSenha"
}

#### Observação: Todos os campos são obrigatórios.

## Autores

- **Daniela Felipe Soares** - [@Danifeares](https://github.com/Danifeares)

- **Gessyca Borges** - [@GessycaBorges](https://github.com/GessycaBorges)

- **Mirella Rebouças** - [@mirellaor](https://github.com/mirellaor)

- **Natalia Salles** - [@Nataliasalles1](https://github.com/Nataliasalles1)