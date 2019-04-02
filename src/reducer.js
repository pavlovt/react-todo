import {Map} from 'immutable';

export default function(state = Map(), action) {
    switch (action.type) {
      case "SET_STATE":
          return state.merge(action.state);
      case "ADD_TODO":
          return state.update("todos", (todos) => todos.push(action.todo));
      case "DELETE_TODO":
          return state.update("todos",
              (todos) => {
                  todos.splice(action.idx, 1);
                  console.log(action.idx, todos)
                  return todos;
              }
          );

        case "UPDATE_TODO":
          return state.update("todos",
              (todos) => todos.map(
                  (item, idx) => idx === action.idx ? action.todo : item
              )
          );

    }
    return state;
  }