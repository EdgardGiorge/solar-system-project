import React, { Component } from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {
          planets.map((item) => {
            const n = item.name;
            const i = item.image;
            return (<PlanetCard key={ n } planetName={ n } planetImage={ i } />);
          })
        }
      </div>
    );
  }
}

export default SolarSystem;
