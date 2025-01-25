import React, { Component } from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends Component {
  render() {
    const planetCard = planets.map((planet) => (
      <PlanetCard
        key={ planet.name }
        planetName={ planet.name }
        planetImage={ planet.image }
      />
    ));

    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div>{planetCard}</div>
      </div>
    );
  }
}
export default SolarSystem;
