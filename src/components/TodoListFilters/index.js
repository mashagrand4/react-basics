import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { updateTodoListFilter } from '../../actions/todos';

import Label from '../common/Label';
import CheckBox from '../common/CheckBox';
import TodoSearch from '../TodoSearch';

function TodoListFilters({ onVisibilityChange, showCompleted, match }) {
  return (
    <View>
      <Label htmlFor="filter-todos">
        <CheckBox
          id="filter-todos"
          onChange={onVisibilityChange}
          isChecked={showCompleted}
        />
        Show done
      </Label>

      <TodoSearch />
    </View>
  );
}

function mapStateToProps(state) {
  return {
    showCompleted: state.todos.filter.showCompleted,
  };
}

function mapDispatchToProps() {
  return function(dispatch) {
    return {
      onVisibilityChange: function(event) {
        dispatch(updateTodoListFilter('showCompleted', !event.target.checked));
      },
    };
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListFilters);

const View = styled.div`
  display: flex;
  align-items: center;
  & > *:first-child {
    margin-right: 10px;
  }
`;
