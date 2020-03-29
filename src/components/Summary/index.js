import React from 'react';
import TileCard from './TileCard';
import HeroCard from './HeroCard';

const Summary = () => {
  return (
    <div>
      <HeroCard />
      <div class="tile is-ancestor has-text-centered">
        <TileCard title="685" subtitle="TOTAL" textColor="warning" />
        <TileCard title="3" subtitle="DEATH" textColor="danger" />
        <TileCard title="188" subtitle="RECOVERED" textColor="success" />
      </div>
    </div>
  );
};

export default Summary;
