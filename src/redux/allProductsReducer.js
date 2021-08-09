import ALL_PRODUCTS from '../constants';

const initialState = {
  allProducts: ALL_PRODUCTS,
};

const allProductsReducer = (state = initialState, action) => {
  const newAllProducts = JSON.parse(JSON.stringify(state.allProducts));
  switch (action.type) {
    case 'INCREASE_PRODUCT_RATING':
      newAllProducts[action.payload.itemIndex].votes += 1;
      return {
        allProducts: newAllProducts,
      };
    default:
      return state;
  }
};

export default allProductsReducer;
