const express = require("express");
const app = express();
const port = 3000;
const router = require("./routers/index");
const conexao = require("./infraestrutura/conexao");
const tabela = require("./infraestrutura/tabelas");


router(app, express);
tabela.init(conexao);



app.listen(port, (error)=>{
  if(error){
    console.log("Deu Erro");
    return;
  }
  console.log("Deu Boaa");
});