const connection = require('../mysql-connection');


module.exports = {
    find: (callBack) => {
        connection.query('SELECT * FROM vendedor', callBack);
    },
    findById: (params, callBack) => {
        connection.query('SELECT * FROM vendedor WHERE id = ?', [params.id], callBack);
    },
    create: (params, callback) => {
        connection.query('INSERT INTO vendedor (codigo, nome, email) VALUES(?, ?, ?)', [params.codigo,
        params.nome, params.email], callback);
    },
    update: (params, callback) => {
        connection.query('UPDATE vendedor SET codigo = ?, nome = ? email = ? WHERE ID = ?', [params.codigo,
        params.nome, params.email, params.id], callback);
    },
    delete: (params, callBack) => {
        connection.query('DELETE FROM vendedor WHERE ID = ?', [params.id], callBack);
    },
}