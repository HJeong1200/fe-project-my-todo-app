import { useState } from 'react';

function TodoList() {
  const [newTodo, setNewTodo] = useState('');

  const inputNewTodo = function (e) {
    const text = e.target.value;
    setNewTodo(text);
  };

  console.log(newTodo);

  return (
    <div className="Todolist_Container">
      <h1 className="Todolist_Header">⭐️ Todo List</h1>
      <input type="text" onChange={inputNewTodo} />
    </div>
  );
}

export default TodoList;
