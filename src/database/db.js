// Importar a dependência do sqlite3
const sqlite3 = require("sqlite3").verbose()

// Criar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

// Exportar o objeto para ser usado em outro local
module.exports = db

/* 
    Utilizar o objeto de banco de dados para operações
    db.serialize(() => {

    // 4 Deletar um dado da tabela
    db.run(`DELETE FROM places WHERE id = ?`, [0], function (err){
        if (err){
            return console.log (err)
        }
        console.log ("Registro deletado com sucesso!")
    })

    // Consultar dados na tabela
    db.all (`SELECT name FROM places`, function (err, rows){
        if (err){
            return console.log (err)
        }
        console.log  ("Aqui estão seus registros: ")
        console.log (rows)
    })

})
*/
