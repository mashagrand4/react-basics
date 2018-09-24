import React from 'react';
import uniqueId from 'lodash.uniqueid';
import { connect } from 'react-redux';
import styled from 'styled-components';

import TodoListItem from './TodoListItem';

function TodoList({ todos, match }) {
  if (!todos.length) {
    return <View>No Todos Found</View>;
  }

  return (
    <View>
      {todos.reverse().map(function(todo) {
        return <TodoListItem key={uniqueId()} todo={todo} match={match} />;
      })}
    </View>
  );
}

function mapStateToProps(state, props) {
  return {
    todos: state.todos.list.filter(function(todo) {
      const { params } = props.match;
      if (!state.todos.filter.showCompleted) {
        if (todo.completed) {
          return false;
        }
      }

      if (todo.categoryId !== params.categoryId) {
        return false;
      }

      if (state.todos.filter.search) {
        if (!todo.text.includes(state.todos.filter.search)) {
          return false;
        }
      }

      return true;
    }),
  };
}

export default connect(mapStateToProps)(TodoList);

const View = styled.div``;
