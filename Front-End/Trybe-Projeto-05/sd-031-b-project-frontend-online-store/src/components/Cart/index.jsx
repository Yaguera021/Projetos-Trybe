import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Cart extends Component {
  state = {
    product: [],
  };

  componentDidMount() {
    const savedItemsStringed = localStorage.getItem('product');
    const savedItems = savedItemsStringed ? JSON.parse(savedItemsStringed) : [];
    this.setState({ product: savedItems });
  }

  handleQuantity = (param) => {
    const { product } = this.state;
    const array = [];
    product.forEach((item) => {
      if (item.id === param.id) {
        item.quantity += 1;
      } array.push(item);
    });
    localStorage.setItem('product', JSON.stringify(array));
    this.setState({ product: array });
  };

  handleDecrease = (param) => {
    const { product } = this.state;
    const array = [];
    product.forEach((item) => {
      if (item.id === param.id && item.quantity >= 2) {
        item.quantity -= 1;
      } array.push(item);
    });
    localStorage.setItem('product', JSON.stringify(array));
    this.setState({ product: array });
  };

  remove = (param) => {
    const array = [];
    const { product } = this.state;
    product.forEach((item) => {
      if (item.id !== param.id) {
        array.push(item);
      }
    });
    localStorage.setItem('product', JSON.stringify(array));
    this.setState({ product: array });
  };

  render() {
    const { product } = this.state;
    console.log(product);
    if (product.length === 0) {
      return <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>;
    }
    return (
      <div style={ { padding: '20px', margin: '20px' } }>
        {product.map((item) => (
          <div key={ item.id }>
            <h1 data-testid="shopping-cart-product-name">{item.title}</h1>
            <img src={ item.thumbnail } alt={ item.title } />
            <p>{ item.price }</p>
            <p data-testid="shopping-cart-product-quantity">{item.quantity}</p>
            <button
              type="button"
              onClick={ () => this.handleQuantity(item) }
              data-testid="product-increase-quantity"
              name={ item.title }
            >
              +
            </button>
            <button
              type="button"
              onClick={ () => this.handleDecrease(item) }
              data-testid="product-decrease-quantity"
            >
              -
            </button>
            <button
              type="button"
              onClick={ () => this.remove(item) }
              data-testid="remove-product"
            >
              remover
            </button>
          </div>
        ))}
        <Link to="/cart" data-testid="shopping-cart-button">Carrinho</Link>
      </div>
    );
  }
}
