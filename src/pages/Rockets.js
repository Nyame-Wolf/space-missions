import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Rocket from '../components/Rocket';
import { getRockets } from '../redux/rockets/rockets';
import '../components/Rockets.css';

export default function Rockets({ rocketFilter }) {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);

  useEffect(() => {
    if (!rockets.length) {
      dispatch(getRockets());
    }
  }, []);

  return (

    <div className="rockets-container">
      <ul className="rockets-list">
        {rockets.filter(rocketFilter).map((rocket) => (
          <li key={rocket.id}>
            <Rocket rocket={rocket} />
          </li>
        ))}
      </ul>
    </div>
  );
}

Rockets.propTypes = {
  rocketFilter: PropTypes.func,
};
Rockets.defaultProps = {
  rocketFilter: Boolean,
};
