import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {todos: [], input: '', idx: -1};
  }

  change = e => {
    this.setState({input: e.target.value})
  }

  addTodo = e => {
    this.setState({input: '', todos: [...this.state.todos, this.state.input]})
  }

  onEdit = idx => {
    this.setState({input: this.state.todos[idx], idx});
  }

  onDelete = idx => {
    this.setState({todos: this.state.todos.filter((v, index) => index !== idx)})
  }

  saveTodo = () => {
    this.setState({input: '', idx: -1, todos: this.state.todos.map((v, index) => {
      if (this.state.idx === index) {
        return this.state.input;
      } else {
        return v;
      }
    })})
  }

  render() {
    const {todos, input, idx} = this.state;
    return (
      <div className="App">
        <input type="text" value={input} onChange={this.change} />
        {idx > -1 ? <button onClick={this.saveTodo}>Save Todo</button> : <button onClick={this.addTodo}>Add Todo</button>}

        <ul>
          {todos.map((v,idx) => {
            return <li key={idx}>{v} <a href="#" onClick={this.onEdit.bind(this, idx)}>Edit</a> <a href="#" onClick={this.onDelete.bind(this, idx)}>Delete</a></li>;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
