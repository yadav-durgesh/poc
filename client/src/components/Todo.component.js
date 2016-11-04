import React from 'react';

const Todo = (props) => {

  const {
    handleChange,
    handleClearCompleted,
    handleSubmitCreate,
    renderTodoActions,
    title,
    todos,
  } = props;

  return (
    <div className="container">

      <div className="jumbotron text-center">
        <h1>
          <span className="text-muted">R.A.M.E.N. Todo List</span> <span className="label label-primary">{todos.length}</span>
        </h1>
      </div>

      <div className="row">
        <div className="col-sm-12">
          <form className="form-inline row">
            <div className="form-group col-sm-5 col-sm-offset-2">
              <input value={title} onChange={handleChange} style={{ width: '100%' }} type="text" className="form-control input-lg text-center form-inline" placeholder="What to do?" />
            </div>
            <div className="form-group">
              <button onClick={handleSubmitCreate} className="btn btn-primary btn-lg btn block">
                Add Todo
              </button>
            </div>
            <div className="form-group">
              <button onClick={handleClearCompleted} className="btn btn-danger btn-lg btn-block">
                Clear Completed
              </button>
            </div>
          </form>
        </div>
      </div>

      {todos.length ? todos.map((todo, idx) => {
        return (
          <div key={idx} className="row">
            <div className="col-sm-8 col-sm-offset-2">
              <div className="row">
                <h3 className="col-sm-9 text-primary">{todo.title}</h3>
                {renderTodoActions(todo)}
              </div>
            </div>
          </div>
        );
      }) : null}

      <footer className="text-center">
        <span className="glyphicon glyphicon-flag"></span>&nbsp; Created by <a href="http://github.com/blakeGuilloud">Blake Guilloud</a>
      </footer>

    </div>
  )
};

export default Todo;
