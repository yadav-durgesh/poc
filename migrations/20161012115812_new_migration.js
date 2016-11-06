exports.up = function(knex, Promise) {
  return Promise.resolve(
    knex.schema.createTableIfNotExists('Todos', (table) => {
      table.increments();
      table.string('title');
      table.boolean('complete');
    })
  )
};

exports.down = function(knex, Promise) {
  return Promise.resolve(
    knex.schema.dropTable('Todos')
  )
  .catch((err) => console.error(err));
};
