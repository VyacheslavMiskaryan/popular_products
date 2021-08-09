import ALL_PRODUCTS from '../constants';

const initialState = {
  allProducts: ALL_PRODUCTS,
};

const allProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE_PRODUCT_RATING':
      console.log(action);
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default allProductsReducer;
