const connection = require('../mysql-connection');


module.exports = {
    find: (callBack) => {
        connection.query('SELECT * FROM cliente', callBack);
    },
    findById: (params, callBack) => {
        connection.query('SELECT * FROM cliente WHERE id = ?', [params.id], callBack);
    },
    create: (params, callback) => {
        connection.query('INSERT INTO cliente (codigo, nome, email) VALUES(?, ?, ?)', [params.codigo,
        params.nome, params.email], callback);
    },
    update: (params, callback) => {
        connection.query('UPDATE cliente SET codigo = ?, nome = ? email = ? WHERE ID = ?', [params.codigo,
        params.nome, params.email, params.id], callback);
    },
    delete: (params, callBack) => {
        connection.query('DELETE FROM cliente WHERE ID = ?', [params.id], callBack);
    },
}