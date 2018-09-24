import uniqueId from 'lodash.uniqueid';
import {
  ADD_CATEGORY_TODO,
  TOGGLE_TODO_STATUS,
  UPDATE_TODO,
  MOVE_TODO_INTO_CATEGORY,
} from 'constants/todos';

import { DELETE_CATEGORY } from 'constants/categories';

const initialState = [];

function list(state = initialState, action) {
  if (action.type === DELETE_CATEGORY) {
    return state.filter(function(todo) {
      return todo.categoryId !== action.payload.id;
    });
  }
  if (action.type === ADD_CATEGORY_TODO) {
    return state.concat({
      ...action.payload,
      id: uniqueId().toString(),
      completed: false,
    });
  }

  if (action.type === TOGGLE_TODO_STATUS) {
    return state.map(function(todo) {
      if (todo.id === action.payload.id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }

      return todo;
    });
  }

  if (action.type === UPDATE_TODO) {
    return state.map(function(todo) {
      if (todo.id === action.payload.todo.id) {
        return {
          ...todo,
          ...action.payload.todo,
        };
      }

      return todo;
    });
  }

  if (action.type === MOVE_TODO_INTO_CATEGORY) {
    return state.map(function(todo) {
      if (todo.id === action.payload.todoId) {
        return {
          ...todo,
          categoryId: action.payload.categoryId,
        };
      }

      return todo;
    });
  }

  return state;
}

export default list;
