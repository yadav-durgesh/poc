'use strict';

exports.up = function (knex, Promise) {
  return Promise.resolve(knex.schema.createTableIfNotExists('Todos', function (table) {
    table.increments();
    table.string('title');
    table.boolean('complete');
  }));
};

exports.down = function (knex, Promise) {
  return Promise.resolve(knex.schema.dropTable('Todos')).catch(function (err) {
    return console.error(err);
  });
};