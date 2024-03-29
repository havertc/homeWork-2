import React, { useState } from 'react';

const TodoReact = () => {
  const [newTodo, setNewTodo] = useState('');
  
  const [todos, setTodos] = useState([]);

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };
  
  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Что-нибудь напишите"
        value={newTodo}
        onChange={handleInputChange}  
      />
      <button onClick={handleAddTodo}>Добавить</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoReact;