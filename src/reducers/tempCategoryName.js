import {
  UPDATE_CATEGORY_TEMP_NAME,
  ADD_NEW_CATEGORY,
} from '../constants/categories';

function tempCategoryName(state = '', action) {
  if (action.type === UPDATE_CATEGORY_TEMP_NAME) {
    return action.payload;
  }

  if (action.type === ADD_NEW_CATEGORY) {
    return '';
  }

  return state;
}

export default tempCategoryName;
