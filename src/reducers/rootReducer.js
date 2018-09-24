import { combineReducers } from 'redux';

import categories from './categories';
import todos from './todos';
import categoryTree from './categoryTree';

const rootReducer = combineReducers({
  categories,
  todos,
  categoryTree,
});

export default rootReducer;
