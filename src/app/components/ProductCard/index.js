import React from 'react';
import PropTypes from 'prop-types';
import { TiShoppingCart } from 'react-icons/ti';

function ProductCard({
  image,
  name,
  price,
  currencySymbol,
  id,
  isFavorite,
  toggleFavorite,
}) {
  return (
    <div className="Box--card">
      <img src={image} alt={name} />
      <div className="Box--card-content">
        <h1>{name}</h1>
        <p>
          {price} {currencySymbol}
        </p>
        <div className="Box--buttons">
          <button type="button">
            <TiShoppingCart />
          </button>
          <button type="button" onClick={() => toggleFavorite(id)}>
            <span roles="img" aria-label="Add to Favorites">
              {isFavorite ? '⭐' : '★'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  currencySymbol: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
};

export default ProductCard;
