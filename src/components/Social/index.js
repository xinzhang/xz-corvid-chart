import React from 'react';
import { Twitter, Facebook } from 'react-social-sharing';
import './index.scss';

const Social = () => {
  const url = 'https://github.com/xinzhang';
  return (
    <p class="has-text-right">
      <Twitter link={url} className="smaller" />
      <Facebook link={url} className="smaller" />
    </p>
  );
};

export default Social;
