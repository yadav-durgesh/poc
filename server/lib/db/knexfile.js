'use strict';

module.exports = {
    client: 'mysql',
    connection: {
        host: process.env.JAWSDB_HOST || '127.0.0.1',
        port: process.env.JAWSDB_PORT || 8080,
        user: process.env.JAWSDB_USER || 'root',
        password: process.env.JAWSDB_PASSWORD || '',
        database: process.env.JAWSDB_DB || 'ramen'
    },
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        tableName: 'knex_migrations'
    }
};