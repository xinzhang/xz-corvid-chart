import React from 'react';

const TileCard = ({ title, subtitle, textColor }) => {
  return (
    <div class="tile">
      <article className="tile is-child box">
        <p className={`title has-text-${textColor}`}>{title}</p>
        <p className="subtitle  is-size-6">{subtitle}</p>
      </article>
    </div>
  );
};

TileCard.defaultProps = {
  textColor: 'success',
};

export default TileCard;
