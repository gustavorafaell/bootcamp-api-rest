const express = require("express"); 
const app = express(); //metodo de inicialização express
const cliente = require("./routes/cliente"); 
const pedido  = require("./routes/pedido");
const cep = require("./routes/cep");
const tipoProduto = require("./routes/tipo_produto");
const produto = require("./routes/produto");
const login = require("./routes/login");
const verifyToken = require("./middlewares/auth");


/*permitir que a aplicação seja iniciada
No arquivo JSON
license...
 "scripts": { 
    "start": "nodemon index.js"
  }*/
/* Instalar dependencias nodemon
yarn add -D nodemon*/
app.use(express.json()); //poder ler o body da requisição

app.use("/login", login);
app.use("/cep", cep);
app.use("/cliente", cliente);
app.use(verifyToken); //tudo que vier depois do middleware está protegido
app.use("/pedido", pedido);
app.use("/tipo_produto", tipoProduto);
app.use("/produto", produto);

app.listen(3000, () =>{ //definir qual porta roda a aplicação 
    console.log("Aplicação rodando na porta 3000");

    /*
    ECMAScript
    const produto = {
      nome: "Arroz",
      preco: 20,
    };
    console.log(produto);
    console.log(produto.nome);

    const {nome} = produto;
    console.log(nome);*/

});


