import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ButtonBase } from '@material-ui/core';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

import increaseProductRating from '../../redux/actions';
import styles from './styles';
import './styles.sass';

const Product = ({
  title,
  description,
  url,
  votes,
  submitterAvatarUrl,
  productImageUrl,
  itemIndex,
}) => {
  const dispatch = useDispatch();
  const classes = styles();

  const handleIncreaseRating = useCallback(() => {
    dispatch(increaseProductRating({ itemIndex }));
  }, [itemIndex]);

  return (
    <div className="grid-container">
      <div className="image-container">
        <img src={productImageUrl} alt="productAvatar" />
      </div>
      <div className="votes-container">
        <ButtonBase className={classes.button} onClick={handleIncreaseRating}>
          <ArrowDropUpIcon />
        </ButtonBase>
        {votes}
      </div>
      <div className="description-container">
        <Link to={`/${url}`} className="title">
          <span>{title}</span>
        </Link>
        <span>{description}</span>
      </div>
      <div className="author-signature-container">
        <span>Submitted by:</span>
        &ensp;
        <img src={submitterAvatarUrl} alt="avatar" />
      </div>
    </div>
  );
};

Product.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  submitterAvatarUrl: PropTypes.string.isRequired,
  productImageUrl: PropTypes.string.isRequired,
  itemIndex: PropTypes.number.isRequired,
};

export default Product;
