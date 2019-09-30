/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import Todo from './todo';
import './App.css';

// state 只放要 render 的東西
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      todoText: '',
      filter: 'all',
    };
    this.id = 1;
    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.markTodo = this.markTodo.bind(this);
  }

  componentDidMount() {
    const todoData = window.localStorage.getItem('todoapp');
    if (todoData) {
      const oldTodos = JSON.parse(todoData);
      this.setState({
        todos: oldTodos,


      });
      this.id = oldTodos[oldTodos.length - 1].id + 1;
    }
  }


  componentDidUpdate(preProps, preState) {
    const { todos } = this.state;
    if (preState.todos !== todos) {
      window.localStorage.setItem('todoapp', JSON.stringify(todos));
    }
  }

  handleChange(e) {
    this.setState({
      todoText: e.target.value,
    });
  }

  addTodo() {
    const { todoText, todos } = this.state;
    this.setState({
      todos: [...todos, {
        id: this.id,
        isCompleted: false,
        text: todoText,
      }],
      todoText: '',
    });
    this.id += 1;
  }

  deleteTodo(id) {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id),
    });
  }

  markTodo(id) {
    const { todos } = this.state;
    this.setState({
      todos: todos.map((todo) => {
        if (todo.id !== id) {
          return todo;
        }
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }),
    });
  }

  render() {
    const { todos, todoText, filter } = this.state;
    return (
      <div className="wrapper">
        <h2>TodoList </h2>
        <div>
          <input type="text" name="todo" value={todoText} onChange={this.handleChange} />
          <button type="button" className="add-todo" onClick={this.addTodo}>add</button>
        </div>
        <div className="filter">
          <div
            className="fliter_all"
            onClick={() => {
              this.setState({
                filter: 'all',
              });
            }}
          >
            All
          </div>
        </div>

        <div className="list">
          {todos.filter(todo => (filter === 'completed' ? todo.isCompleted : true))
            .map(todo => (
              <Todo
                key={todo.id}
                todo={todo}
                deleteTodo={this.deleteTodo}
                markTodo={this.markTodo}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default App;
