import { combineReducers } from 'redux';
import { routerReducer }   from 'react-router-redux';
import todoReducer         from './Todo.reducer';


const rootReducer = combineReducers({
  todos: todoReducer,
  routing:  routerReducer,
});

export default rootReducer;
