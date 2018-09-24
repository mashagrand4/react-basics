import { combineReducers } from 'redux';

import filter from './filter';
import list from './list';

export default combineReducers({
  filter,
  list,
});

export function getTodoProgress(state) {
  const todos = state.todos.list;

  if (!state.categories.length) {
    return 0;
  }

  if (!todos.length) {
    return 100;
  }

  const todosByCategories = todos.reduce(function(acc, todo) {
    if (acc[todo.categoryId]) {
      acc[todo.categoryId].push(todo);
    } else {
      acc[todo.categoryId] = [todo];
    }
    return acc;
  }, {});

  const completedCategories = Object.keys(todosByCategories).reduce(function(
    acc,
    key,
  ) {
    let completedTodosLength = 0;

    todosByCategories[key].forEach(function(todo) {
      if (todo.completed) {
        completedTodosLength++;
      }
    });

    if (completedTodosLength === todosByCategories[key].length) {
      acc++;
    }
    return acc;
  },
  0);

  if (!completedCategories) {
    return 0;
  }

  return (
    completedCategories /
    Object.keys(todosByCategories).length *
    100
  ).toFixed(0);
}
