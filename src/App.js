import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Todo from './components/Todo';
import Upsert from './components/Upsert';

import actions from './actions';
import {connect} from 'react-redux';

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
    const {input, idx} = this.state;
    const {todos, addTodo, deleteTodo, updateTodo} = this.props;

    return (
      <div className="App">
        <Header />
        <Upsert idx={idx} input={input} change={this.change} saveTodo={this.saveTodo} addTodo={this.addTodo} />
        <ul>
          {todos.map((v,idx) => {
            return <Todo key={idx} v={v} 
              onEdit={this.onEdit.bind(this, idx)} 
              onDelete={() => deleteTodo(idx)} />
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.get("todos")
  };
}
 
export default connect(mapStateToProps, actions)(App);

