import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rocket from '../components/Rocket';
import { getRockets } from '../redux/rockets/rockets';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);

  useEffect(() => {
    dispatch(getRockets());
  }, []);

  return (

    <div className="rocket-list">
      <div className="rockets-container">
        {rockets.map((rocket) => (
          <ul key={rocket.id}>
            <Rocket rocket={rocket} />
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Rockets;
