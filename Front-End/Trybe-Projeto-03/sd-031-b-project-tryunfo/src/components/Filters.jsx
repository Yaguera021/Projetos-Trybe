import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Filter extends Component {
  render() {
    const { filterName, filterRare, filterTrunfo, handleChange } = this.props;
    return (
      <div>
        <h2>Filtros</h2>
        <label htmlFor="filterName">
          <input
            type="text"
            name="filterName"
            id="filterName"
            data-testid="name-filter"
            placeholder="Name"
            onChange={ handleChange }
            value={ filterName }
          />
        </label>
        <label htmlFor="filterRare">
          <select
            id="filterRare"
            name="filterRare"
            data-testid="rare-filter"
            value={ filterRare }
            onChange={ handleChange }
          >
            <option value="todas">Todas</option>
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito-Raro</option>
          </select>
        </label>
        <label htmlFor="filterTrunfo">
          <input
            type="checkbox"
            name="filterTrunfo"
            id="filterTrunfo"
            data-testid="trunfo-filter"
            // onChange={ handleChange }
            value={ filterTrunfo }
          />
        </label>
      </div>
    );
  }
}

Filter.propTypes = {
  filterName: PropTypes.string.isRequired,
  filterRare: PropTypes.string.isRequired,
  filterTrunfo: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
};
