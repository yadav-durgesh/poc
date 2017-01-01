'use strict';

module.exports = {
    client: 'mysql',
    connection: {
        host: process.env.PORT || '127.0.0.1',
        user: 'root',
        password: '',
        database: process.env.CLEARDB_DATABASE_URL || 'ramen'
    },
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        tableName: 'knex_migrations'
    }
};