

<h1 align="center">
     <img title="Icone dt money" src="./src/assets/images/logo.svg" width="308" height="62" alt="RocketShoes">
</h1>

<p align="center">  
 RocketShoes é uma aplicação que é usada em um dos desafios do segundo modulo do Ignite da <a href="https://rocketseat.com.br/">Rocketseat</a>.
</p>

<p align="center">O principal objetivo desse desafio é criar um hook de carrinho de compras.</p>


<h4 align="center">
	🚧 Concluído 🚀 🚧
</h4>

Tabela de conteúdos
=================
<!--ts-->
   * [Sobre o projeto](#-sobre-o-projeto)
   * [Layout](#-layout)
     * [Veja a aplicação funcionando](#veja-a-aplicação-funcionando)
     * [Web](#web)
   * [Como executar o projeto](#-como-executar-o-projeto)
   * [Tecnologias](#-tecnologias)
   * [Licença](#user-content--licença)
<!--te-->


## 💻 Sobre o projeto

<p>O projeto é uma aplicação onde é listado vários produtos e podemos adicionar eles no carrinho de compras além de remover e alterar a quantidade de produto selecionado no carrinho.</p>
<p>Além dessas funcionalidades foi necessario fazer uma validação de estoque limitando a quantidade de produto que poderia ser adicionda no carrinho.</p>
<p>E por último depois de cada ação no carrinho de compras os dados são preservados com localStorage</p>

## 🎨 Layout

### Veja a aplicação funcionando

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img title="Preview mostrando como funciona a aplicação" src="./src/assets/screenshot/rocketShoes.gif" width="800px" alt="Preview mostrando como funciona a aplicação" />
</p>

### Web

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img title="Preview da página home da aplicação" src="./src/assets/screenshot/preview-home-page.jpg" width="400px" alt="Preview da página home da aplicação" />
  <img title="Preview da página home da aplicação com o scroll até o final da página" src="./src/assets/screenshot/preview-home-page-final-scroll.jpg" width="400px" alt="Preview da página home da aplicação com o scroll até o final da página" />
  <img title="Preview da página home com items adicionado no carrinho" src="./src/assets/screenshot/preview-home-page-with-items-add-to-cart.jpg" width="400px" alt="Preview da página home com items adicionado no carrinho" />
  <img title="Preview da página home com items adicionado no carrinho" src="./src/assets/screenshot/preview-home-page-with-items-add-to-cart.jpg" width="400px" alt="Preview da página home com items adicionado no carrinho" />
  <img title="Preview da página de carrinho de compras sem produtos no carrinho" src="./src/assets/screenshot/preview-cart-empty.jpg" width="400px" alt="Preview da página de carrinho de compras sem produtos no carrinho" />
  <img title="Preview da página de carrinho de compras com produtos no carrinho" src="./src/assets/screenshot/preview-cart-empty.jpg" width="400px" alt="Preview da página de carrinho de compras com produtos no carrinho" />
</p>

## 🚀 Como executar o projeto

Para executar esse projeto, você deve abrir 2 terminais um para iniciar a aplicação e outro o JSON Server.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

#### Rodando a aplicação web (Frontend)

```bash

# Clone este repositório
$ git clone https://github.com/Tuhh16/desafio-01-modulo-2-trilha-reactjs.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd desafio-01-modulo-2-trilha-reactjs

# Instale as dependências
$ yarn install

# Execute a aplicação em modo de desenvolvimento
$ yarn start

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000

# Para iniciar o backend basta iniciar o json server seguindo os seguintes passos

# Acesse a pasta do projeto no seu terminal/cmd
$ cd desafio-01-modulo-2-trilha-reactjs

# Execute a aplicação em modo de desenvolvimento
$ yarn server

# A aplicação será aberta na porta:3333 - acesse http://localhost:3333

```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

-   **[ReactJs](https://pt-br.reactjs.org/)**
-   **[TypeScript](https://www.typescriptlang.org/)**

> Veja o arquivo  [package.json](https://github.com/Tuhh16/desafio-01-modulo-2-trilha-reactjs/blob/master/package.json)

---

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

Feito por Arthur Teodoro Alves de Lima 👋🏽 [Entre em contato!](https://www.linkedin.com/in/arthur-lima-reactjs/)
