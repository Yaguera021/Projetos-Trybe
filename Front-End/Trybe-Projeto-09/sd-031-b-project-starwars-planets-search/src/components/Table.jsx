import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function Table() {
  const {
    filteredPlanets,
    headers,
    filterPlanetName,
    arrayFilters,
    applySort,
  } = useContext(StarWarsContext);

  const byName = (planet) => planet.name.toLowerCase()
    .includes(filterPlanetName.toLowerCase());

  const compareFilters = (planet) => arrayFilters.every((filter) => {
    const { column, comparison, value } = filter;
    switch (comparison) {
    case 'maior que':
      return Number(planet[column]) > Number(value);
    case 'menor que':
      return Number(planet[column]) < Number(value);
    case 'igual a':
      return Number(planet[column]) === Number(value);
    default:
      return false;
    }
  });

  const bySort = (a, b) => {
    const { column, sort } = applySort;
    const minNum = -1;
    if (column) {
      if (a[column] === 'unknown') {
        return 1;
      }
      if (b[column] === 'unknown') {
        return minNum;
      }
      if (sort === 'ASC') {
        return Number(a[column]) - Number(b[column]);
      }
      if (sort === 'DESC') {
        return Number(b[column]) - Number(a[column]);
      }
      return 0;
    }
  };

  if (filteredPlanets.length) {
    return (
      <table>
        <thead>
          <tr>
            {headers.map((key) => (
              <th key={ key }>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredPlanets
            .filter(byName)
            .filter(compareFilters)
            .sort(bySort)
            .map((planet) => (
              <tr key={ planet.name }>
                <td data-testid="planet-name">{planet.name}</td>
                <td>{planet.rotation_period}</td>
                <td>{planet.orbital_period}</td>
                <td>{planet.diameter}</td>
                <td>{planet.climate}</td>
                <td>{planet.gravity}</td>
                <td>{planet.terrain}</td>
                <td>{planet.surface_water}</td>
                <td>{planet.population}</td>
                <td>{planet.created}</td>
                <td>{planet.edited}</td>
                <td>{planet.url}</td>
                <td>{planet.films}</td>
              </tr>
            ))}
        </tbody>
      </table>
    );
  }
}
