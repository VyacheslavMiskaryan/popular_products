import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Product from './Product';
import store from '../../redux/store';

test('Products renders correctly', () => {
  const component = renderer.create(
    <Provider store={store}>
      <BrowserRouter>
        <Product
          title="Yellow Pail"
          description="On-demand sand castle construction expertise"
          url="/#"
          votes={44}
          submitterAvatarUrl="assets/images/avatarImages/daniel.png"
          productImageUrl="assets/images/productImages/image-aqua.png"
          itemIndex={1}
        />
      </BrowserRouter>
    </Provider>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
