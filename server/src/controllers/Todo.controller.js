import * as todoService from '../db/services/Todo.service';

export function postTodo(req, res) {
  Promise.resolve()
    .then(() => todoService.postTodo(req.body))
    .then((todo) => res.status(200).json(todo))
}

export function getTodos(req, res) {
  Promise.resolve()
    .then(() => todoService.getTodos())
    .then((todos) => res.status(200).json(todos))
}

export function patchTodo(req, res) {
  Promise.resolve()
    .then(() => todoService.patchTodo(req.params.id, req.body))
    .then((todos) => res.status(200).json(todos))
}

export function deleteTodo(req, res) {
  Promise.resolve()
    .then(() => todoService.deleteTodo(req.params.id))
    .then((todos) => res.status(200).json(todos))
}
