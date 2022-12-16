import PropTypes from 'prop-types';
import { useState } from 'react';

function Todo({ todoObj, todoList, setTodoList }) {
  const { id, todo } = todoObj;
  const [isEditing, setIsEditing] = useState(false);
  const [newTodo, setNewTodo] = useState(todo);
  const [isComplete, setIsComplete] = useState(false);

  const deleteTodo = function () {
    setTodoList(todoList.filter((todoObj) => todoObj.id !== id));
  };

  const editTodo = function () {
    setIsEditing(() => !isEditing);

    if (isEditing) {
      console.log(newTodo);
      setTodoList(
        todoList.map((todoObj) => {
          if (todoObj.id === id) return { ...todoObj, todo: newTodo };
          return todoObj;
        })
      );
    }
  };

  const changeTodo = function (e) {
    const text = e.target.value;
    setNewTodo(text);
  };

  const checkComplete = function () {
    setIsComplete(() => !isComplete);
  };

  return (
    <li>
      <input id={todoObj.id} type="checkbox" onClick={checkComplete} />
      <div className={isComplete ? 'Todo_Content complete' : 'Todo_Content'}>
        {isEditing ? <input value={newTodo} onChange={changeTodo} /> : todo}
      </div>
      <button onClick={editTodo}>E</button>
      <button onClick={deleteTodo}>X</button>
    </li>
  );
}

Todo.propTypes = {
  todoObj: PropTypes.object.isRequired,
  todoList: PropTypes.array.isRequired,
  setTodoList: PropTypes.func.isRequired,
};

export default Todo;
