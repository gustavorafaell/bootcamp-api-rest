const express = require("express"); 
const app = express(); //metodo de inicialização express
const cliente = require("./routes/cliente"); 
const pedido  = require("./routes/pedido")
/*permitir que a aplicação seja iniciada
No arquivo JSON
license...
 "scripts": { 
    "start": "nodemon index.js"
  }*/
/* Instalar dependencias nodemon
yarn add -D nodemon*/
app.use(express.json()); //poder ler o body da requisição
app.use("/cliente", cliente);
app.use("/pedido", pedido);
app.listen(3000, function(){ //definir qual porta roda a aplicação 
    console.log("Aplicação rodando na porta 3000");
});


