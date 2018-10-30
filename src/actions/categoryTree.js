import { TOGGLE_CATEGORY_IN_TREE } from '../constants/categoryTree';

export function toggleCategoryInTree(categoryId) {
  return {
    type: TOGGLE_CATEGORY_IN_TREE,
    payload: categoryId,
  };
}
