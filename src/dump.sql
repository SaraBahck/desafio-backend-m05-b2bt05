CREATE TABLE usuarios (
  id serial primary key,
  nome varchar(255) not null,
  email varchar(255) not null,
  senha varchar(255) not null
  );
  
CREATE TABLE categorias (
  id serial primary key,
  descricao varchar(100) not null
  );
  

INSERT INTO categorias (descricao) VALUES
  ('Informática'),
  ('Celulares'),
  ('Beleza e Perfumaria'),
  ('Mercado'),
  ('Livros e Papelaria'),
  ('Brinquedos'),
  ('Moda'),
  ('Bebê'),
  ('Games');


CREATE TABLE produtos (
  id serial primary key,
  descricao varchar(255) not null,
  quantidade_estoque int,
  valor int,
  categoria_id int REFERENCES categorias(id)
);

CREATE TABLE clientes (
  id serial primary key,
  nome varchar(255) not null,
  email varchar(255) not null unique,
  cpf int not null unique,
  cep int,
  rua varchar(255),
  numero int,
  bairro varchar(100),
  cidade varchar(100),
  estado varchar(100)
);