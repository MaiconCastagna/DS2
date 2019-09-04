const connection = require('../mysql-connection');


module.exports = {
    find: (callBack) => {
        connection.query('SELECT * FROM pedido', callBack);
    },
    findById: (params, callBack) => {
        callBack;
    },
    create: (params, callback) => {
        callback;
    },
    update: (params, callback) => {
        callback;
    },
    delete: (params, callBack) => {
        callBack;
    },
}