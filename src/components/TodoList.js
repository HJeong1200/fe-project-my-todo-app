import { useState } from 'react';
import Todo from './Todo';
import Checkbox from './styled_components/Checkbox';

function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [allComplete, setAllComplete] = useState(false);

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

  const checkAllComplete = function () {
    setAllComplete(() => !allComplete);
  };

  return (
    <div className="Todolist_Container">
      <h1 className="Todolist_Header">⭐️ Todo List</h1>
      <div className="Checkbox_Container">
        <Checkbox htmlFor="Checkbox_All">{allComplete ? '✔️' : ''}</Checkbox>
      </div>
      <input id="Checkbox_All" type="checkbox" onChange={checkAllComplete} />
      <ul className="Todo_Container">
        {todoList.map((todoObj) => {
          return (
            <Todo
              key={todoObj.id}
              todoObj={todoObj}
              todoList={todoList}
              setTodoList={setTodoList}
              allComplete={allComplete}
            />
          );
        })}
      </ul>
      <input
        type="text"
        placeholder="Todo 추가"
        className="NewTodo_Input"
        onChange={inputNewTodo}
        onKeyDown={addNewTodo}
      />
    </div>
  );
}

export default TodoList;
