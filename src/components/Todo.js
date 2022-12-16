import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Button from './styled_components/Button';
import Checkbox from './styled_components/Checkbox';

function Todo({ todoObj, todoList, setTodoList, allComplete }) {
  const { id, todo } = todoObj;
  const [isEditing, setIsEditing] = useState(false);
  const [newTodo, setNewTodo] = useState(todo);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (allComplete) {
      setIsComplete(true);
    } else {
      setIsComplete(false);
    }
  }, [allComplete]);

  const deleteTodo = function () {
    setTodoList(todoList.filter((todoObj) => todoObj.id !== id));
  };

  const editTodo = function () {
    setIsEditing(() => !isEditing);

    if (isEditing) {
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

  const handleEnterPress = function (e) {
    if (e.keyCode === 13) {
      editTodo();
    }
  };

  return (
    <li>
      <Checkbox htmlFor={todoObj.id}>{isComplete ? '✔️' : ''}</Checkbox>
      <input id={todoObj.id} type="checkbox" onClick={checkComplete} />
      <div className={isComplete ? 'Todo_Content complete' : 'Todo_Content'}>
        {isEditing ? (
          <input
            value={newTodo}
            onChange={changeTodo}
            onKeyDown={handleEnterPress}
          />
        ) : (
          todo
        )}
      </div>
      <div className="Todo_Buttons">
        <Button onClick={editTodo}>✏️</Button>
        <Button onClick={deleteTodo}>❌</Button>
      </div>
    </li>
  );
}

Todo.propTypes = {
  todoObj: PropTypes.object.isRequired,
  todoList: PropTypes.array.isRequired,
  setTodoList: PropTypes.func.isRequired,
  allComplete: PropTypes.bool.isRequired,
};

export default Todo;
