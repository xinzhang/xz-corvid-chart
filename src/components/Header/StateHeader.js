import React from 'react';
import classNames from 'classnames';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

function StateHeader({ history }) {
    const {
      location: { pathname },
    } = history;

  const isActive = (s) => classNames({ 'is-active': pathname === `/${s}` });

  return (
    <div className="tabs">
      <ul style={{ justifyContent: 'center' }}>
        <li className={isActive('aus')}>
          <Link to="/aus">AUS</Link>
        </li>
        <li className={isActive('nsw')}>
          <Link to="/nsw">NSW</Link>
        </li>
        <li className={isActive('vic')}>
          <Link to="/vic">VIC</Link>
        </li>
        <li className={isActive('act')}>
          <Link to="/act">ACT</Link>
        </li>
        <li className={isActive('qld')}>
          <Link to="/qld">QLD</Link>
        </li>
        <li className={isActive('sa')}>
          <Link to="/sa">SA</Link>
        </li>
      </ul>
    </div>
  );
}

export default withRouter(StateHeader);
