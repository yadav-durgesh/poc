import { handleActions }    from 'redux-actions';
import * as TodoActionTypes from '../constants/Todo.constants';

const todoReducer = handleActions({
  [TodoActionTypes.RECEIVE_TODOS]: (state, action) =>
    ({
      ...state,
      todos: action.payload,
    }),
}, {
  error: '',
  loading: false,
  todos: [],
});

export default todoReducer;
