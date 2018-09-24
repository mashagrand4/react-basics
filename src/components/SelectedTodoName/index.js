import styled from 'styled-components';
import { connect } from 'react-redux';

const SelectedTodoName = styled.h1`
  margin-top: 0;
`;

function getChildren(state, id) {
  const todo =
    state.find(function(todo) {
      return todo.id === id;
    }) || {};

  return todo.text;
}

function mapStateToProps(state, props) {
  return {
    children: getChildren(state.todos.list, props.match.params.todoId),
  };
}

export default connect(mapStateToProps)(SelectedTodoName);
