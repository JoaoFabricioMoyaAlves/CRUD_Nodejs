class Tabelas{
    init(conexao){
        this.conexao = conexao;
        this.criarTabelaAtendimentos();
    }

    criarTabelaAtendimentos(){
        const sql =`
        CREATE TABLE IF NOT EXISTS atendimentos (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            DATA DATE,
            servico VARCHAR(100),
             cliente VARCHAR(100),
             STATUS ENUM("ativo", "realizado", "cancelado") DEFAULT "ativo");`
             this.conexao.query(sql, (error)=>{
               if(error){
                console.log("Deu erro nessa merda de Banco de dados ")
                console.log(error.message);
                return;
               }

               console.log("Deu boaa com o banco de dados brother");
             });
    }
}

module.exports = new Tabelas();