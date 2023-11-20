import React from 'react';
import { useState } from 'react';
import './todo.css';

function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  function Change(e) {
    setInput(e.target.value);
    console.log(input); 
  }

  function Submit(e) {
    setTodos([...todos, input]);
    setInput('');
  }

  return (
    <div>
      <h1>Todo List</h1>
      <form>
        <input type='text' value={input} onChange={Change} />
        <button type='button' onClick={Submit}>
          Add Todo
        </button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );

}

export default Todo;
