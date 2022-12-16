import { useState } from 'react';

function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const inputNewTodo = function (e) {
    const text = e.target.value;
    setNewTodo(text);
  };

  const addNewTodo = function (e) {
    if (e.keyCode === 13) setTodoList([...todoList, newTodo]);
  };

  return (
    <div className="Todolist_Container">
      <h1 className="Todolist_Header">⭐️ Todo List</h1>
      <input type="text" onChange={inputNewTodo} onKeyUp={addNewTodo} />
    </div>
  );
}

export default TodoList;
