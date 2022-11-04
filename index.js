const express = require("express"); 
const app = express(); //metodo de inicialização express

app.listen(3000, function(){ //definir qual porta roda a aplicação 
    console.log("Aplicação rodando na porta 3000");
});
/*permitir que a aplicação seja iniciada
No arquivo JSON
license...
 "scripts": { 
    "start": "nodemon index.js"
  }*/
/* Instalar dependencias nodemon
yarn add -D nodemon*/
