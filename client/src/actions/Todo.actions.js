import { createAction }       from 'redux-actions';
import axios                  from '../axios';
import * as TodoActionTypes   from '../constants/Todo.constants';

const requestData  = createAction(TodoActionTypes.REQUEST_DATA);
const receiveTodos = createAction(TodoActionTypes.RECEIVE_TODOS);

export function fetchTodos() {
  return (dispatch) => {
    dispatch(requestData());
    return axios.get('/api/todos')
      .then((response) => dispatch(receiveTodos(response.data)))
      .catch((err) => console.log(err));
  };
}

export function updateTodo(todoId, payload) {
  return (dispatch) => {
    dispatch(requestData());
    return axios.patch(`/api/todos/${todoId}`, payload)
      .then((response) => dispatch(receiveTodos(response.data)))
      .catch((err) => console.log(err));
  };
}

export function createTodo(payload) {
  return (dispatch) => {
    dispatch(requestData());
    return axios.post('/api/todos', payload)
      .then((response) => dispatch(receiveTodos(response.data)))
      .catch((err) => console.log(err));
  };
}

export function destroyTodo(todoId) {
  return (dispatch) => {
    dispatch(requestData());
    return axios.delete(`/api/todos/${todoId}`)
      .then((response) => dispatch(receiveTodos(response.data)))
      .catch((err) => console.log(err));
  };
}
