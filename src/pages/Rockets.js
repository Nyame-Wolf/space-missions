import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Rocket from '../components/Rocket';
import { getRockets } from '../redux/rockets/rockets';

export default function Rockets({ rocketFilter }) {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);

  useEffect(() => {
    if (!rockets.length) {
      dispatch(getRockets());
    }
  }, []);

  return (

    <div className="rocket-list">
      <div className="rockets-container">
        {rockets.filter(rocketFilter).map((rocket) => (
          <ul key={rocket.id}>
            <Rocket rocket={rocket} />
          </ul>
        ))}
      </div>
    </div>
  );
}

Rockets.propTypes = {
  rocketFilter: PropTypes.func,
};
Rockets.defaultProps = {
  rocketFilter: Boolean,
};
