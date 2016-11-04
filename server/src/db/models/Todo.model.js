import path       from 'path';
import { Model }  from 'objection';

function Todo() {
  Model.apply(this, arguments);
}

Model.extend(Todo);

Todo.tableName = 'Todos';

Todo.jsonSchema = {
  type: 'object',
  properties: {
    id: { type: 'integer' },
    title: { type: 'string' },
    complete: {
      type: 'boolean',
      default: false,
    },
  },
};

export default Todo;
