const connection = require('../mysql-connection');


module.exports = {
    find: (callBack) => {
        connection.query('SELECT * FROM produto', callBack);
    },
    findById: (params, callBack) => {
        connection.query('SELECT * FROM produto WHERE id = ?', [params.id], callBack);
    },
    create: (params, callback) => {
        connection.query('INSERT INTO produto (codigo, nome, descricao, preco) VALUES(?, ?, ?, ?)', [params.codigo,
        params.nome, params.descricao, params.preco], callback);
    },
    update: (params, callback) => {
        connection.query('UPDATE produto SET codigo = ?, nome = ? descricao = ? preco = ? WHERE ID = ?', [params.codigo,
        params.nome, params.descricao, params.preco, params.id], callback);
    },
    delete: (params, callBack) => {
        connection.query('DELETE FROM produto WHERE ID = ?', [params.id], callBack);
    },
}