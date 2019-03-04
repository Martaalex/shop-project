import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import { TiShoppingCart, TiHeartOutline } from 'react-icons/ti';

function Shop({ products }) {
  return (
    <div className="Box">
      {products.map(product => (
        <div className="Box--card">
          <img src={product.image} alt={product.name} />
          <div className="Box--card-content">
            <h1 key={product.id}>{product.name}</h1>
            <p>
              {product.price} {product.currencySymbol}
            </p>
            <div className="Box--buttons">
              <button type="button">
                <TiShoppingCart />
              </button>
              <button type="button">
                <TiHeartOutline />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

Shop.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

Shop.defaultProps = {
  products: [],
};

export default Shop;
