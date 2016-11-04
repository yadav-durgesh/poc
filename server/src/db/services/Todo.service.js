import Todo from '../models/Todo.model';

export async function postTodo(todo) {
  let newTodo;

  try {
    newTodo = await Todo.query()
      .insertWithRelated(todo);
  } catch (err) {
    return Promise.reject(err);
  }

  return getTodos();
}

export async function getTodos() {
  let todos;

  try {
    todos = await Todo.query();
  } catch (err) {
    return Promise.reject(err);
  }

  if (!todos) return Promise.reject('no todos');

  return Promise.resolve(todos);
}

export async function patchTodo(todoId, todoData) {
  const todo = await getTodo(todoId);

  await todo.$query().update(todoData);

  return getTodos();
}

export async function deleteTodo(todoId) {
  const todo = await getTodo(todoId);

  await todo.$query().delete();

  return getTodos();
}

export async function getTodo(todoId) {
  const todo = await Todo.query().findById(todoId);

  return Promise.resolve(todo);
}
