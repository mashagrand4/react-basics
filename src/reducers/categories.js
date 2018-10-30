import uniqueId from 'lodash.uniqueid';

import {
  ADD_NEW_CATEGORY,
  DELETE_CATEGORY,
  UPDATE_CATEGORY_NAME,
} from '../constants/categories';

const initialState = [];

function deleteCategory(state, action) {
  const matches = [];

  state.forEach(function(category) {
    if (category.id !== action.payload.id) {
      matches.push({
        ...category,
        childCategories: deleteCategory(category.childCategories, action),
      });
    }
  });
  return matches;
}

function addCategoryToParent(state, action) {
  if (state.id === action.payload.parentCategoryId) {
    return {
      ...state,
      childCategories: [
        {
          ...action.payload,
          id: uniqueId().toString(),
          childCategories: [],
        },
        ...state.childCategories,
      ],
    };
  }

  return {
    ...state,
    childCategories: state.childCategories.map(function(childCategory) {
      return addCategoryToParent(childCategory, action);
    }),
  };
}

function categories(state = initialState, action) {
  if (action.type === ADD_NEW_CATEGORY) {
    if (action.payload.parentCategoryId) {
      return state.map(function(category) {
        return addCategoryToParent(category, action);
      });
    }

    return [
      {
        id: uniqueId().toString(),
        name: action.payload.name,
        childCategories: [],
        parentCategoryId: action.payload.parentCategoryId,
      },
      ...state,
    ];
  }

  if (action.type === DELETE_CATEGORY) {
    return deleteCategory(state, action);
  }

  if (action.type === UPDATE_CATEGORY_NAME) {
    return state.map(function iter(category) {
      if (category.id === action.payload.id) {
        return {
          ...category,
          name: action.payload.name,
        };
      }

      return {
        ...category,
        childCategories: category.childCategories.map(iter),
      };
    });
  }

  return state;
}

export default categories;
