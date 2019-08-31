const knex = require('../mysql-connection');

module.exports = {
    find: () => {
        //knex.from('users').innerJoin('accounts', 'users.id', 'accounts.user_id')
        return knex.select().from('cidade').innerJoin('estado', 'estado.id', 'estado.');
    },
    findById: (params) => {
        return knex.select().from('cidade').where({ id: params.id });
    },
    create: (params) => {
        return knex.insert(params).into('cidade');
    },
    update: (params) => {
        return knex('cidade').update(params).where({ id: params.id });
    },
    delete: (params) => {
        return knex('cidade').del().where({ id: params.id });
    }
}
