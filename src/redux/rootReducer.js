import { combineReducers } from 'redux';

import allProductsReducer from './allProductsReducer';

const rootReducer = combineReducers({
  products: allProductsReducer,
});

export default rootReducer;
