import PropTypes from 'prop-types';

function Todo({ todo }) {
  return <li>{todo}</li>;
}

Todo.propTypes = {
  todo: PropTypes.string.isRequired,
};

export default Todo;
