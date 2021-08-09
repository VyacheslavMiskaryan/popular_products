import React from 'react';
import { useSelector } from 'react-redux';

import Product from '../Product';

const MainContainer = () => {
  const { allProducts } = useSelector((state) => state.products);
  console.log(allProducts);
  return (
    <div>
      <p>Popular Products</p>
      <hr />
      {allProducts.map((item) => (
        <Product key={item.id} />
      ))}
    </div>
  );
};

export default MainContainer;
