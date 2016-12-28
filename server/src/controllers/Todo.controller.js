import * as todoService from '../db/services/Todo.service';
import { SendSuccess, SendError } from 'tael';

export function postTodo(req, res) {
  Promise.resolve()
    .then(() => todoService.postTodo(req.body))
    .then(SendSuccess(res))
    .catch(SendError(res));
}

export function getTodos(req, res) {
  return Promise.resolve()
    .then(() => todoService.getTodos())
    .then(SendSuccess(res))
    .catch(SendError(res));
}

export function patchTodo(req, res) {
  Promise.resolve()
    .then(() => todoService.patchTodo(req.params.id, req.body))
    .then(SendSuccess(res))
    .catch(SendError(res));
}

export function deleteTodo(req, res) {
  Promise.resolve()
    .then(() => todoService.deleteTodo(req.params.id))
    .then(SendSuccess(res))
    .catch(SendError(res));
}
