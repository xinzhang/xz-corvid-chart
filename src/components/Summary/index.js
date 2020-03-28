import React from 'react';
import TileCard from './TileCard';

const Summary = () => {
  return (
    <div>
      <section class="hero is-info welcome is-small">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">Hello, Australian.</h1>
            <h2 class="subtitle">I hope we stick together to pass this!</h2>
          </div>
        </div>
      </section>
      <div class="tile is-ancestor has-text-centered">
        <TileCard title="685" subtitle="TOTAL" textColor="warning" />
        <TileCard title="3" subtitle="DEATH" textColor="danger" />
        <TileCard title="188" subtitle="RECOVERED" textColor="success" />
      </div>
    </div>
  );
};

export default Summary;
