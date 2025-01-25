import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

export default function StarWarsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [arrayFilters, setArrayFilters] = useState([]);
  const [filterPlanetName, setFilterPlanetName] = useState('');
  const [applyFilter, setApplyFilter] = useState({
    column: '',
    comparison: '',
    value: 0,
  });
  const [applySort, setApplySort] = useState({ column: '', sort: '' });

  useEffect(() => {
    const getPlanets = async () => {
      const request = await fetch('https://swapi.dev/api/planets');
      const { results } = await request.json();
      const removeRes = results.map((planet) => {
        delete planet.residents;
        return planet;
      });
      setPlanets(removeRes);
      setFilteredPlanets(removeRes);
      setHeaders(Object.keys(removeRes[0]));
      return removeRes;
    };
    getPlanets();
  }, []);

  const context = {
    planets,
    setPlanets,
    filteredPlanets,
    setFilteredPlanets,
    headers,
    setHeaders,
    applyFilter,
    setApplyFilter,
    arrayFilters,
    setArrayFilters,
    filterPlanetName,
    setFilterPlanetName,
    applySort,
    setApplySort,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
