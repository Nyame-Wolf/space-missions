import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import FullRocket from '../components/rocket/Rocket';
import { getRockets } from '../redux/rockets/rockets';
import '../components/rocket/Rockets.css';

export default function Rockets({ rocketFilter, component: Rocket }) {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (!rockets.length && !isLoading) {
      setLoading(true);
      dispatch(getRockets()).then(() => {
        setLoading(false);
      }).catch(() => {
        setLoading(false);
      });
    }
  }, []);

  console.log(rockets, isLoading);
  const filteredRockets = rockets.filter(rocketFilter);
  return filteredRockets.length ? (
    <div className="rockets-container">
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
};
Rockets.defaultProps = {
  rocketFilter: Boolean,
  component: FullRocket,
};
