var database = require("../database/config");

function listar() {

    var instrucaoSql = `
select  g.nome as genero, COUNT(l.id) as total_livros
from livro as l
inner join genero as g 
on l.fkGenero = g.id
group by g.nome
order by total_livros desc;
`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listar
}
