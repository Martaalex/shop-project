import React from 'react';
import { MoonLoader } from 'react-spinners';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import { Shop, Favorites, Cart } from './pages';
import { PageLayout } from './components';

// const NAV_LINKS = ['shop', 'cart', 'favorites'].map(link => (
//   <button type="button" onClick={() => console.log(link)}>
//     {link}
//   </button>
// ));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      error: null,
      loading: false,
    };
    this.NAV_LINKS = ['shop', 'cart', 'favorites'].map(link => (
      <Link to={`/${link}`}>{link}</Link>
    ));
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch('https://boiling-reaches-93648.herokuapp.com/food-shop/products')
      .then(response => response.json())
      .then(json => {
        const products = json.map(product => ({
          ...product,
          isFavorite: false,
          cartCount: 0,
        }));
        this.setState({ products, loading: false });
      })
      .catch(() =>
        this.setState({ error: 'something went wrong', loading: false })
      );
  }

  toggleFavorite = id => {
    this.setState(state => ({
      products: state.products.map(product => {
        if (product.id === id) {
          return { ...product, isFavorite: !product.isFavorite };
        }

        return product;
      }),
    }));
  };

  updateCartCount = (id, value) => {
    this.setState(state => ({
      products: state.products.map(product => {
        if (product.id === id) {
          return { ...product, cartCount: value };
        }

        return product;
      }),
    }));
  };

  renderShop = () => {
    const { products } = this.state;

    return (
      <Shop
        products={products}
        toggleFavorite={this.toggleFavorite}
        updateCartCount={this.updateCartCount}
      />
    );
  };

  renderCart = () => {
    const { products } = this.state;

    return (
      <Cart products={products.filter(product => product.cartCount > 0)} />
    );
  };

  renderFavorites = () => {
    const { products } = this.state;

    return (
      <Favorites
        products={products.filter(product => product.isFavorite)}
        toggleFavorite={this.toggleFavorite}
        updateCartCount={this.updateCartCount}
      />
    );
  };

  render() {
    const { loading, error } = this.state;
    return (
      <Router>
        <PageLayout navLinks={this.NAV_LINKS}>
          {/* {error && alert(error)} */}
          {error && <span>{error}</span>}
          {loading && <MoonLoader />}

          <Route exact path="/shop" component={this.renderShop} />
          <Route path="/favorites" component={this.renderFavorites} />
          <Route path="/cart" component={this.renderCart} />
          <Redirect exact from="/" to="/shop" />
        </PageLayout>
      </Router>
    );
  }
}

export default App;
