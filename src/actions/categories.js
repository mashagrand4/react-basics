import {
  ADD_NEW_CATEGORY,
  DELETE_CATEGORY,
  UPDATE_CATEGORY_NAME,
} from '../constants/categories';

export function addNewCategory(name, parentCategoryId) {
  return {
    type: ADD_NEW_CATEGORY,
    payload: {
      name,
      parentCategoryId,
    },
  };
}

export function deleteCategory(id) {
  return {
    type: DELETE_CATEGORY,
    payload: {
      id,
    },
  };
}

export function updateCategoryName(id, name) {
  return {
    type: UPDATE_CATEGORY_NAME,
    payload: {
      id,
      name,
    },
  };
}
