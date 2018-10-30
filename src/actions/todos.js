import {
  UPDATE_TODO_LIST_FILTER,
  ADD_CATEGORY_TODO,
  TOGGLE_TODO_STATUS,
  UPDATE_TODO,
  MOVE_TODO_INTO_CATEGORY,
} from '../constants/todos';

export function updateTodoListFilter(filterName, value) {
  return {
    type: UPDATE_TODO_LIST_FILTER,
    payload: {
      filterName,
      value,
    },
  };
}

export function addCategoryTodo(categoryId, text) {
  return {
    type: ADD_CATEGORY_TODO,
    payload: {
      categoryId,
      text,
    },
  };
}

export function toggleTodoStatus(id) {
  return {
    type: TOGGLE_TODO_STATUS,
    payload: {
      id,
    },
  };
}

export function updateTodo(todo) {
  return {
    type: UPDATE_TODO,
    payload: {
      todo,
    },
  };
}

export function moveTodoIntoCategory(todoId, categoryId) {
  return {
    type: MOVE_TODO_INTO_CATEGORY,
    payload: {
      todoId,
      categoryId,
    },
  };
}
