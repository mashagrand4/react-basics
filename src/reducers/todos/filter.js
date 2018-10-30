import { UPDATE_TODO_LIST_FILTER } from '../../constants/todos';

function filter(
  state = {
    showCompleted: true,
    search: '',
  },
  action
) {
  if (action.type === UPDATE_TODO_LIST_FILTER) {
    return {
      ...state,
      [action.payload.filterName]: action.payload.value,
    };
  }
  return state;
}

export default filter;
