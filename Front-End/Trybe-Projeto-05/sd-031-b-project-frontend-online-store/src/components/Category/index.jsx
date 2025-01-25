import React, { Component } from 'react';
import propTypes from 'prop-types';
import { getCategories } from '../../services/api';

export default class Categorias extends Component {
  state = {
    categories: [],
  };

  async componentDidMount() {
    const categories = await getCategories();
    this.setState({ categories });
  }

  render() {
    const { categories } = this.state;
    const { getProducts } = this.props;
    return (
      <div>
        {categories.map((category) => (
          <button
            name={ category.id }
            data-testid="category"
            key={ category.id }
            onClick={ (event) => getProducts(event) }
          >
            {category.name}
          </button>))}
      </div>
    );
  }
}

Categorias.propTypes = {
  getProducts: propTypes.func.isRequired,
};
