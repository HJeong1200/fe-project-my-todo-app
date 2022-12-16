import PropTypes from 'prop-types';

function Todo({ todoObj, todoList, setTodoList }) {
  const { id, todo } = todoObj;
  const deleteTodo = function () {
    setTodoList(todoList.filter((todoObj) => todoObj.id !== id));
  };

  return (
    <li>
      <div className="Todo_Content">{todo}</div>
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
