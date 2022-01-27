import React, { Component } from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {
          missions.map((item) => {
            const n = item.name;
            const y = item.year;
            const c = item.country;
            const d = item.destination;
            return (<MissionCard
              key={ n }
              name={ n }
              year={ y }
              country={ c }
              destination={ d }
            />);
          })
        }
      </div>

    );
  }
}

export default Missions;
