import { useState } from 'react';
import Todo from './Todo';

function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const inputNewTodo = function (e) {
    const text = e.target.value;
    setNewTodo(text);
  };

  const addNewTodo = function (e) {
    if (e.keyCode === 13) {
      setTodoList([...todoList, { id: Date.now(), todo: newTodo }]);
      e.target.value = '';
    }
  };

  return (
    <div className="Todolist_Container">
      <h1 className="Todolist_Header">⭐️ Todo List</h1>
      <ul className="Todo_Container">
        {todoList.map((todoObj) => {
          return (
            <Todo
              key={todoObj.id}
              todoObj={todoObj}
              todoList={todoList}
              setTodoList={setTodoList}
            />
          );
        })}
      </ul>
      <input type="text" onChange={inputNewTodo} onKeyDown={addNewTodo} />
    </div>
  );
}

export default TodoList;
