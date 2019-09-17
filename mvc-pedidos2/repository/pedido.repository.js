const connection = require('../mysql-connection');


module.exports = {
    find: (callback) => {
        connection.query(query, (error, resultPedido) => {

            if (error) {
                callback(error, false);
                return;
            }

            const idPedido = resultPedido[0].p_id;

            const queryItens = 'SELECT ip.id as ip_id, ip.qtdade, ip.vlrunit, ' + 'p.id as p_id, p.codigo, p.nome, p.descricao, p.preco ' +
                'FROM itempedido ip ' + 'INNER JOIN produto p ON p.id = ip.produto_id ' + 'WHERE ip.pedido_id = ' + idPedido;

            connection.query(queryItens, (error, resultItens) => {
                if (error) {
                    callback(error, false);
                    return;
                }

                const itens = [];

                for (item of resultItens) {

                    let itempedido = {
                        id: item.ip_id,
                        qtdade: item.qtdade,
                        vlrunit: item.vlrunit,
                        produto: {
                            id: item.p_id,
                            codigo: item.codigo,
                            nome: item.nome,
                            descricao: item.descricao,
                            preco: item.preco
                        }
                    }
                    
                    itens.push(itempedido);

                }

                resultPedido[0].itens = itens;

                callback(error, resultPedido);
            });
        });
    },

    findById: (params, callBack) => {
        const idPedido = resultPedido[0].p_id;
        connection.query(query + 'WHERE id = ?', [params.id], (error, resultPedido) => {

            if (error) {
                callback(error, false);
                return;
            }

            const queryItens = 'SELECT ip.id as ip_id, ip.qtdade, ip.vlrunit, ' + 'p.id as p_id, p.codigo, p.nome, p.descricao, p.preco ' +
                'FROM itempedido ip ' + 'INNER JOIN produto p ON p.id = ip.produto_id ' + 'WHERE ip.pedido_id = ' + idPedido;

            connection.query(queryItens, [resultPedido[0].p_id], (error, resultItens) => {
                if (error) {
                    callback(error, false);
                    return;
                }

                const itens = [];

                for (item of resultItens) {

                    let itempedido = {
                        id: item.ip_id,
                        qtdade: item.qtdade,
                        vlrunit: item.vlrunit,
                        produto: {
                            id: item.p_id,
                            codigo: item.codigo,
                            nome: item.nome,
                            descricao: item.descricao,
                            preco: item.preco
                        }
                    }

                    itens.push(itempedido);

                }

                resultPedido[0].itens = itens;

                callback(error, resultPedido);
            });
        });
    },
    create: (params, callback) => {
        connection.beginTransaction(error => {
            if (error) {
                callback(error, false);
                return;
            }
            connection.query('', [], (error, cabecResult) => {//JOIN POR CASCADE (PARA QUANDO TIVER TABELA PAI E FILHO)
                if (error) {
                    connection.rollback(() => {
                        callback(error, false);
                        return;
                    });

                }

                const pedidoID = cabecResult.insertID
                //monta query de incersão de itens
                let qrInsertItens = 'INSERT INTO itempedido (pedido_id, produto_id, qtdade, vlrunit) VALUES ';
                //insere os itens do pedido
                let queryAux = '';
                for (item of params.itens) {

                    queryAux += queryAux == '' ? '' : ',' + "(" + pedidoID + ", " + item.produto.id + ", " + item.qtdade + ", " + item.vlrunit + ")"//verif
                }

                callback(false, queryAux);
            });
        });
    },

    update: (params, callback) => {
        callback;
    },
    delete: (params, callBack) => {
        callBack;
    },
}