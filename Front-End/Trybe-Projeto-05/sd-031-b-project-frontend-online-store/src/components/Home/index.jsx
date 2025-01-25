import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Category from '../Category';
import { getProductsFromCategoryAndQuery } from '../../services/api';

export default class Home extends Component {
  state = {
    results: [],
    search: '',
    loading: true,
    error: false,
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value,
    });
  };

  getProducts = async (event) => {
    const { name } = event.target;
    const Url = `https://api.mercadolibre.com/sites/MLB/search?category=${name}`;
    const response = await fetch(Url);
    const data = await response.json();
    this.setState({ results: data.results });
  };

  handleClick = async () => {
    this.setState({ loading: false });
    const { search } = this.state;
    const res = await getProductsFromCategoryAndQuery(search, search);
    if (res.results.length === 0) {
      this.setState({ error: true });
    }
    this.setState({ results: res.results, loading: true });
  };

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
    const { results, search, loading, error } = this.state;
    if (error) { return <h1>Nenhum produto foi encontrado</h1>; }
    if (!loading) { return <h1>Carregando...</h1>; }

    return (
      <div>
        <h1
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        <input
          type="text"
          name="search"
          value={ search }
          data-testid="query-input"
          onChange={ this.handleChange }
        />
        <button
          data-testid="query-button"
          onClick={ () => this.handleClick() }
        >
          Pesquisar
        </button>
        <Link to="/cart" data-testid="shopping-cart-button">Carrinho</Link>
        <Category getProducts={ this.getProducts } />
        {results.map((result) => (
          <div
            data-testid="product"
            key={ result.id }
          >
            <h2>{result.title}</h2>
            <img src={ result.thumbnail } alt={ result.title } />
            <Link
              to={ `/productdetails/${result.id}` }
              data-testid="product-detail-link"
            >
              Detalhes
            </Link>
            <p>{ result.price }</p>
            <button
              id={ result.title }
              name={ result.id }
              data-testid="product-add-to-cart"
              onClick={ (event) => this.addToCart(event, result) }
            >
              Adicionar ao carrinho
            </button>
          </div>))}
      </div>
    );
  }
}
