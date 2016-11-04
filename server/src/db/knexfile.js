module.exports = {
    client: 'mysql',
    connection: {
        host: process.env.JAWSDB_COBALT_URL || '127.0.0.1',
        user: 'root',
        password: '',
        database: process.env.JAWSDB_COBALT_URL || 'test',
    },
    pool: {
        min: 2,
        max: 10,
    },
    migrations: {
      tableName: 'knex_migrations'
    }
};
