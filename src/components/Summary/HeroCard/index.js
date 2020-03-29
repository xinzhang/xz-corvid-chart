import React from 'react';

const HeroCard = ({ title, subtitle }) => {
  return (
    <section class="hero is-info welcome is-small">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">Hello, Australian.</h1>
            <h2 class="subtitle">I hope we stick together to pass this!</h2>
          </div>
        </div>
      </section>
  );
};

export default HeroCard;
