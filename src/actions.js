const addTodo = function (todo) {
    return {
        type: "ADD_TODO",
        todo
    }
};
const updateTodo = function (idx, todo) {
    return {
        type: "UPDATE_TODO",
        idx,
        todo
    }
};
const deleteTodo = function (idx) {
    return {
        type: "DELETE_TODO",
        idx
    }
};
   
  module.exports = {addTodo, deleteTodo, updateTodo};