import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function Filters() {
  const [columnFilter, setColumnFilter] = useState('population');
  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const [valueFilter, setValueFilter] = useState(0);
  const [sortColumn, setSortColumn] = useState('population');
  const [sortOrder, setSortOrder] = useState('');

  const {
    setApplyFilter,
    arrayFilters,
    setArrayFilters,
    filterPlanetName,
    setFilterPlanetName,
    setApplySort,
  } = useContext(StarWarsContext);

  const columnFilters = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  // Armazena o valor de colunas já filtradas
  const filteredColumn = arrayFilters.map((filter) => filter.column);
  const availableColumns = columnFilters.filter((column) => (
    !filteredColumn.includes(column)
  ));

  const handleClick = (e) => {
    e.preventDefault();
    const newFilter = {
      column: columnFilter,
      comparison: comparisonFilter,
      value: valueFilter,
    };
    setApplyFilter(newFilter);
    setArrayFilters([...arrayFilters, newFilter]);
    setColumnFilter('population');
    setComparisonFilter('maior que');
    setValueFilter(0);
  };

  const handleDelete = (id) => {
    const filtered = arrayFilters.filter((filter) => filter.column !== id);
    setArrayFilters(filtered);
  };

  const handleSort = (e) => {
    e.preventDefault();
    const newSort = {
      column: sortColumn,
      sort: sortOrder,
    };
    setApplySort(newSort);
    setSortColumn('population');
    setSortOrder('');
  };

  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        name="filterPlanetName"
        value={ filterPlanetName }
        onChange={ ({ target: { value } }) => setFilterPlanetName(value) }
        placeholder="Search by name"
      />
      <div>
        <label htmlFor="column-filter">
          column:
          <select
            data-testid="column-filter"
            id="column"
            name="columnFilter"
            value={ columnFilter }
            onChange={ ({ target: { value } }) => setColumnFilter(value) }
          >
            {
              availableColumns.map((column) => (
                <option key={ column } value={ column }>
                  {column}
                </option>
              ))
            }
          </select>
        </label>
        <label htmlFor="comparison-filter">
          operator:
          <select
            data-testid="comparison-filter"
            id="comparison"
            name="comparisonFilter"
            value={ comparisonFilter }
            onChange={ ({ target: { value } }) => setComparisonFilter(value) }
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>
        <label htmlFor="value-filter">
          <input
            data-testid="value-filter"
            id="value"
            name="valueFilter"
            type="number"
            value={ valueFilter }
            onChange={ ({ target: { value } }) => setValueFilter(value) }
          />
        </label>
        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleClick }
        >
          Filtrar
        </button>
      </div>
      <div>
        <select
          onChange={ ({ target: { value } }) => setSortColumn(value) }
          data-testid="column-sort"
          id="sortColumn"
          name="sortColumn"
          value={ sortColumn }
        >
          {
            columnFilters.map((column) => (
              <option key={ column } value={ column }>
                {column}
              </option>
            ))
          }
        </select>
        <label htmlFor="sort-order">
          <input
            type="radio"
            id="sort-order"
            name="sortOrder"
            value="ASC"
            data-testid="column-sort-input-asc"
            checked={ sortOrder === 'ASC' }
            onChange={ ({ target: { value } }) => setSortOrder(value) }
          />
          Ascendente
        </label>
        <label htmlFor="sort-order">
          <input
            type="radio"
            id="sort-order"
            name="sortOrder"
            value="DESC"
            data-testid="column-sort-input-desc"
            checked={ sortOrder === 'DESC' }
            onChange={ ({ target: { value } }) => setSortOrder(value) }
          />
          Descendente
        </label>
        <button
          onClick={ handleSort }
          data-testid="column-sort-button"
        >
          Ordenar
        </button>
      </div>
      <div>
        {arrayFilters.map((filter) => (
          <div
            className="filtersList"
            key={ filter.column }
            data-testid="filter"
          >
            <span>{filter.column}</span>
            <span>{filter.comparison}</span>
            <span>{filter.value}</span>
            <button
              onClick={ () => handleDelete(filter.column) }
            >
              Remover 🗑️
            </button>
          </div>
        ))}
        {arrayFilters.length ? (
          <button
            type="button"
            data-testid="button-remove-filters"
            onClick={ () => setArrayFilters([]) }
          >
            Remover todos os filtros
          </button>
        ) : null}
      </div>
    </div>
  );
}
