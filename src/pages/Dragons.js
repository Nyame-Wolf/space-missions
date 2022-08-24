import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDragons } from '../redux/dragons/dragonsSlice';
import DragonItem from '../components/DragonItem';
import '../components/Rockets.css';

export default function Dragons() {
  const dispatch = useDispatch();
  const dragons = useSelector((state) => state.dragons);

  useEffect(() => {
    if (!dragons.length) {
      dispatch(getDragons());
    }
  }, []);

  return (

    <div className="rockets-container">
      <ul className="rockets-list">
        {dragons.map((dragon) => (
          <li key={dragon.id}>
            <DragonItem dragon={dragon} />
          </li>
        ))}
      </ul>
    </div>
  );
}
