import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rocket from '../components/Rocket';
import { getRockets } from '../redux/rockets/rockets';

export const Rockets = (props) => (

  <div className="rocket-list">
    <div className="rockets-container">
      {props.rockets.map((rocket) => (
        <ul key={rocket.id}>
          <Rocket rocket={rocket} />
        </ul>
      ))}
    </div>
  </div>
);

export function MyRockets() {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);

  useEffect(() => {
    dispatch(getRockets());
  }, []);

  return (
    <Rockets rockets={rockets.filter((rocket) => rocket.reserved)} />
  );
}

export default function AllRockets() {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);

  useEffect(() => {
    dispatch(getRockets());
  }, []);

  return (
    <Rockets rockets={rockets} />
  );
}
