import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends Component {
  render() {
    const missionCards = missions.map((mission) => (
      <MissionCard
        key={ mission.name }
        name={ mission.name }
        year={ mission.year }
        country={ mission.country }
        destination={ mission.destination }
      />
    ));

    return (
      <>
        <Title headline="Missões" />
        <div data-testid="missions">{missionCards}</div>
      </>
    );
  }
}

export default Missions;
