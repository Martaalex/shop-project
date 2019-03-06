import React from 'react';
import PropTypes from 'prop-types';
import { ProductCard, ProductsContainer } from '../../components';

function Shop({ products, toggleFavorite, updateCartCount }) {
  return (
    <ProductsContainer>
      {products.map(product => (
        <ProductCard
          key={product.id}
          {...product}
          toggleFavorite={toggleFavorite}
          updateCartCount={updateCartCount}
        />
      ))}
    </ProductsContainer>
  );
}

Shop.propTypes = {
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
  updateCartCount: PropTypes.func.isRequired,
};

Shop.defaultProps = {
  products: [],
};

export default Shop;
