const conexao = require("../infraestrutura/conexao");

class atendimentoModel{
   listar(){
    const sql = "SELECT * FROM atendimentos";
      return new Promise((resolve, reject)=>{
        conexao.query(sql, {}, (error, resposta)=>{
            if(error){
                console.log("Deu erro no Listar");
                reject(error);
            }
            console.log("Showwww Foii");
            resolve(resposta);
          });
      }) 
   }

     criar(novoAtendimento){
     const sql = "INSERT INTO atendimentos SET ?";
   return new Promise((resolve, reject)=>{
    conexao.query(sql, novoAtendimento,(error, resposta)=>{
        if(error){
            console.log("Deu erro ao criar ...");
            reject(error);
        }
        console.log("Showw criou");
        resolve(resposta);
      } );
   });  
   }

   atualizar(atendimentoAtualizado, id){
    const sql = "UPDATE atendimentos SET ? WHERE id = ?";
  return new Promise((resolve, reject)=>{
   conexao.query(sql, [atendimentoAtualizado, id],(error, resposta)=>{
       if(error){
           console.log("Deu erro ao Atualizar ...");
           reject(error);
       }
       console.log("Showw atualizou");
       resolve(resposta);
     } );
  });  
  }

  delete(id){
    const sql = "DELETE FROM atendimentos WHERE id = ?";
  return new Promise((resolve, reject)=>{
   conexao.query(sql, id,(error, resposta)=>{
       if(error){
           console.log("Deu erro ao deletar ...");
           reject(error);
       }
       console.log("Showw deletou");
       resolve(resposta);
     } );
  });  
  }
} 
module.exports = new atendimentoModel();

