module.exports = {
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: JAWSDB_COBALT_URL || process.env.JAWSDB_COBALT_URL || 'ramen',
    },
    pool: {
        min: 2,
        max: 10,
    },
    migrations: {
      tableName: 'knex_migrations'
    }
};
