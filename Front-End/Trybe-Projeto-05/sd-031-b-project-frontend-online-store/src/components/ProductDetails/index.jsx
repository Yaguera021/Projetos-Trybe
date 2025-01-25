import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductById } from '../../services/api';

export default class ProductDetails extends Component {
  state = {
    results: [],
    loading: true,
  };

  async componentDidMount() {
    this.setState({ loading: false });
    const { match: { params: { id } } } = this.props;
    const results = await getProductById(id);
    this.setState({ results: [results], loading: true });
  }

  addToCart = async (event, product) => {
    const items = JSON.parse(localStorage.getItem('product')) || [];
    const item = items.find((prod) => prod.id === product.id);
    if (item) {
      item.quantity += 1;
    } else {
      items.push({ ...product, quantity: 1 });
    }
    localStorage.setItem('product', JSON.stringify(items));
  };

  render() {
    const { results, loading } = this.state;
    if (!loading) { return <h1>Carregando...</h1>; }
    return (
      <div>
        {results.map((result) => (
          <div
            key={ result.id }
          >
            <h2 data-testid="product-detail-name">{result.title}</h2>
            <img
              data-testid="product-detail-image"
              src={ result.thumbnail }
              alt="product"
            />
            <p data-testid="product-detail-price">{result.price}</p>
            <button
              data-testid="product-detail-add-to-cart"
              onClick={ (event) => this.addToCart(event, result) }
            >
              Adicionar ao carrinho
            </button>
          </div>
        ))}
        <Link to="/cart" data-testid="shopping-cart-button">Carrinho</Link>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ id: PropTypes.string }) }) }.isRequired;
