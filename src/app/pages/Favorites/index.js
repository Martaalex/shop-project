import React from 'react';
import PropTypes from 'prop-types';
import { ProductCard, ProductsContainer } from '../../components';

function Favorites({ products, toggleFavorite }) {
  return (
    <ProductsContainer>
      {products.map(product => (
        <ProductCard
          key={product.id}
          {...product}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </ProductsContainer>
  );
}

Favorites.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      currencySymbol: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      isFavorite: PropTypes.bool.isRequired,
      toggleFavorite: PropTypes.func.isRequired,
    })
  ),
  toggleFavorite: PropTypes.func.isRequired,
};

Favorites.defaultProps = {
  products: [],
};

export default Favorites;
