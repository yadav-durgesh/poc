module.exports = {
    client: 'postgres',
    connection: {
        host: process.env.PORT || '127.0.0.1',
        user: 'root',
        password: '',
        database: process.env.DATABASE_URL || 'ramen',
    },
    pool: {
        min: 2,
        max: 10,
    },
    migrations: {
      tableName: 'knex_migrations'
    }
};
