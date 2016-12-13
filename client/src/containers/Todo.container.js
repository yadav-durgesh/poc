import React                  from 'react';
import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions       from '../actions/Todo.actions';
import { TodoComponent }      from '../components';
import rpt                    from 'react.proptypes';

class Todos extends React.Component {

  static propTypes = rpt({
    createTodo: 'func',
    destroyTodo: 'func',
    fetchTodos: 'func',
    updateTodo: 'func',
    todos: 'array',
  });

  state = {
    title: '',
    todoId: -1,
  }

  componentDidMount() {
    this.props.fetchTodos();
  }

  handleChange = (e) => {
    const newState = {};

    newState.title = e.target.value;

    this.setState(newState);
  }

  handleClearCompleted = (event) => {
    event.preventDefault();

    const completedTodos = this.props.todos.filter(todo => todo.complete);

    completedTodos.forEach(todo => this.props.destroyTodo(todo.id));
  }

  handleSubmitCreate = (event) => {
    event.preventDefault();

    const {
      title,
    } = this.state;

    if (title) this.props.createTodo({ title });

    this.setState({ title: '' });
  }

  handleSubmitEdit = (event) => {
    event.preventDefault();

    const {
      title,
      todoId,
    } = this.state;

    this.props.updateTodo(todoId, { title });

    this.setState({ todoId: -1 });
  }

  toggleComplete = (todoId, complete) => this.props.updateTodo(todoId, { complete: !complete });

  toggleEdit = (todoId) => {
    const newState = {};

    newState.todoId = todoId;

    this.setState(newState);
  }

  handleDestroy = todoId => this.props.destroyTodo(todoId);

  renderToggleOptions = (todo) => {
    return (
      <div>
        {todo.complete ? <h3 onClick={() => this.toggleComplete(todo.id, todo.complete)} className="col-sm-1 glyphicon glyphicon-ok-circle text-primary"></h3> : <h3 onClick={() => this.toggleComplete(todo.id)} className="col-sm-1 glyphicon glyphicon-ok-circle text-muted"></h3>}
        <h3 onClick={() => this.toggleEdit(todo.id)} className="col-sm-1 glyphicon glyphicon-edit text-success"></h3>
        <h3 onClick={() => this.handleDestroy(todo.id)} className="col-sm-1 glyphicon glyphicon-trash text-danger"></h3>
      </div>
    );
  }

  renderEditForm = (todo) => {
    return (
      <div className="col-sm-12">
        <form action="" className="form-inline row">
          <div className="form-group col-sm-9">
            <input style={{ width: '100%' }} onChange={this.handleChange} defaultValue={todo.title} type="text" className="form-control input-lg text-center"/>
          </div>
          <div className="form-group col-sm-3">
            <button onClick={this.handleSubmitEdit} className="btn btn-success btn-lg btn-block">
              Edit Todo
            </button>
          </div>
        </form>
      </div>
    );
  }

  renderTodoActions = (todo) => {
    let markup;

    switch (this.state.todoId) {
      case todo.id:
        markup = this.renderEditForm(todo);
        break;
      default:
        markup = this.renderToggleOptions(todo);
    };

    return (markup);
  }

  render() {
    const props = {
      handleChange: this.handleChange,
      handleClearCompleted: this.handleClearCompleted,
      handleSubmitCreate: this.handleSubmitCreate,
      renderTodoActions: this.renderTodoActions,
      title: this.state.title,
      todos: this.props.todos,
    };

    return (<TodoComponent {...props} />);
  }
}

function mapStateToProps(state) {
  const { todos } = state;
  return {
    todos: todos.todos,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createTodo: bindActionCreators(TodoActions.createTodo, dispatch),
    destroyTodo: bindActionCreators(TodoActions.destroyTodo, dispatch),
    fetchTodos: bindActionCreators(TodoActions.fetchTodos, dispatch),
    updateTodo: bindActionCreators(TodoActions.updateTodo, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
