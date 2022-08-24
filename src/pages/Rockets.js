import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Rocket from '../components/Rocket';
import { getRockets } from '../redux/rockets/rockets';
import '../components/Rockets.css';

export default function Rockets() {
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
        {rockets.map((rocket) => (
          <li key={rocket.id}>
            <Rocket rocket={rocket} />
          </li>
        ))}
      </ul>
    </div>
  );
}
