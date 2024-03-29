const todoState = {
  todos: [
    {title:'Watch TV', id:1},
    {title:'Play mobile game', id:2}
  ]
};

const todoReducer = (state = todoState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'addTodo':
      return {
        todos: [...state.todos, payload]
      };
    case 'deleteTodo':
      return {
        todos: state.todos.filter(todo => todo.id !== payload)
      };
    default:
      return state; 
  }
};

export default todoReducer;