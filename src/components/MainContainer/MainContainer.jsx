import React from 'react';
import { useSelector } from 'react-redux';

import Product from '../Product';

import sortingRule from './utils';
import './styles.sass';

const MainContainer = () => {
  const { allProducts } = useSelector((state) => state.products);

  return (
    <div className="main-container">
      <p className="main-title">Popular Products</p>
      <div className="line" />
      <div className="products-container">
        {allProducts.sort(sortingRule('votes')).map((item, index) => (
          <Product
            key={item.id}
            title={item.title}
            description={item.description}
            url={item.url}
            votes={item.votes}
            itemIndex={index}
            submitterAvatarUrl={item.submitterAvatarUrl}
            productImageUrl={item.productImageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default MainContainer;
