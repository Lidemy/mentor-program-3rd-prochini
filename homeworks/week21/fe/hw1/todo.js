/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
    this.mark = this.mark.bind(this);
  }

  delete() {
    const { todo, deleteTodo } = this.props;
    deleteTodo(todo.id);
  }

  mark() {
    const { todo, markTodo } = this.props;
    markTodo(todo.id);
  }

  render() {
    const { todo } = this.props;
    return (
      <div className={`list-item ${todo.isCompleted ? 'Completed' : ''}`}>
        <div className="list-item_state">
          {todo.isCompleted ? '☑' : '☐'}
        </div>
        <div className="list-item_content">
          {todo.text}
        </div>
        <div className="list-item_action">
          <button className="list-item_complated" type="button" onClick={this.mark}>
            {todo.isCompleted ? 'pending' : 'completed'}
          </button>
          <button className="list-item_delete" type="button" onClick={this.delete}>delete</button>
        </div>
      </div>
    );
  }
}
export default Todo;
