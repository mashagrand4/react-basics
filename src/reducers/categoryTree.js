import { TOGGLE_CATEGORY_IN_TREE } from 'constants/categoryTree';

const initialState = {
  openCategories: [],
};

function categoryTree(state = initialState, action) {
  if (action.type === TOGGLE_CATEGORY_IN_TREE) {
    if (state.openCategories.includes(action.payload)) {
      return {
        ...state,
        openCategories: state.openCategories.filter(function(id) {
          return id !== action.payload;
        }),
      };
    }

    return {
      ...state,
      openCategories: state.openCategories.concat(action.payload),
    };
  }

  return state;
}

export default categoryTree;

export function getOpenCategories(state) {
  return state.openCategories;
}
