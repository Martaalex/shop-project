import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ProductCard, ProductsContainer } from '../../components';

function Favorites({ products, toggleFavorite, updateCartCount }) {
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

Favorites.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ).isRequired,
  toggleFavorite: PropTypes.func.isRequired,
  updateCartCount: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    products: state.shop.products.filter(product => product.isFavorite),
  };
}

function mapStateDispatchToProps(dispatch) {
  return {
    toggleFavorite: id =>
      dispatch({ type: 'TOGGLE_FAVORITE_PRODUCT', payload: id }),
    updateCartCount: (id, count) =>
      dispatch({ type: 'UPDATE_PRODUCT_CART_COUNT', payload: { id, count } }),
  };
}

export default connect(
  mapStateToProps,
  mapStateDispatchToProps
)(Favorites);
