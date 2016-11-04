'use strict';

exports.seed = function (knex, Promise) {
  return knex('Todos').del().then(function () {
    return Promise.all([knex('Todos').insert({ id: 1, title: 'Han Solo', complete: false }), knex('Todos').insert({ id: 2, title: 'Luke Skywalker', complete: false }), knex('Todos').insert({ id: 4, title: 'Boba Fett', complete: true }), knex('Todos').insert({ id: 3, title: 'Darth Vader', complete: false }), knex('Todos').insert({ id: 5, title: 'Leia Skywalker', complete: true }), knex('Todos').insert({ id: 6, title: 'Kylo Ren', complete: false })]);
  });
};