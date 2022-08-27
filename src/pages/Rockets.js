import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import FullRocket from '../components/rocket/Rocket';
import { getRockets } from '../redux/rockets/rockets';
import '../components/rocket/Rockets.css';

export default function Rockets({ rocketFilter, component: Rocket, className }) {
  const dispatch = useDispatch();
  const { lifecycle, rockets } = useSelector((state) => state.rockets);

  useEffect(() => {
    if (!rockets.length && lifecycle.loading === 'initial') {
      dispatch(getRockets());
    }
  });

  const filteredRockets = rockets.filter(rocketFilter);
  return filteredRockets.length ? (
    <div className={`rockets-container ${className}`}>
      <ul className="rockets-list">
        { filteredRockets.map((rocket) => (
          <li key={rocket.id}>
            <Rocket rocket={rocket} />
          </li>
        ))}
      </ul>
    </div>
  ) : <div className="no-mission">No Rockets Reserved</div>;
}

Rockets.propTypes = {
  rocketFilter: PropTypes.func,
  component: PropTypes.func,
  className: PropTypes.string,
};
Rockets.defaultProps = {
  rocketFilter: Boolean,
  component: FullRocket,
  className: '',
};
