import { createAction }       from 'redux-actions';
import epona from 'epona';

import * as TodoActionTypes   from '../constants/Todo.constants';

const requestData  = createAction(TodoActionTypes.REQUEST_DATA);
const receiveTodos = createAction(TodoActionTypes.RECEIVE_TODOS);

export function fetchTodos() {
  return (dispatch) => {
    dispatch(requestData());

    const requestObject = {
      route: '/api/todos',
    };

    return epona.get(requestObject)
      .then(response => dispatch(receiveTodos(response)))
      .catch(err => console.log(err));
  };
}

export function updateTodo(todoId, payload) {
  return (dispatch) => {
    dispatch(requestData());

    const requestObject = {
      route: `/api/todos/${todoId}`,
      body: payload,
    };

    return epona.patch(requestObject)
      .then(response => dispatch(receiveTodos(response)))
      .catch(err => console.log(err));
  };
}

export function createTodo(payload) {
  return (dispatch) => {
    dispatch(requestData());

    const requestObject = {
      route: '/api/todos',
      body: payload,
    };

    return epona.post(requestObject)
      .then(response => dispatch(receiveTodos(response)))
      .catch(err => console.log(err));
  };
}

export function destroyTodo(todoId) {
  return (dispatch) => {
    dispatch(requestData());

    const requestObject = {
      route: `/api/todos/${todoId}`,
    };

    return epona.delete(requestObject)
      .then(response => dispatch(receiveTodos(response)))
      .catch(err => console.log(err));
  };
}
