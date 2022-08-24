import { useDispatch, useSelector } from 'react-redux';
import { reserveMission } from '../redux/missions/missionsSlice';
import { reserveDragon } from '../redux/dragons/dragonsSlice';
import '../components/Profile.css';
import { reserve } from '../redux/rockets/rockets';

const Profile = () => {
  const dispatch = useDispatch();
  const missionList = useSelector((state) => state.missions);
  const dragonList = useSelector((state) => state.dragons);
  const rockets = useSelector((state) => state.rockets);
  const missionReserved = missionList.filter((mission) => mission.reserved === true);
  const dragonReserved = dragonList.filter((dragon) => dragon.reserved === true);
  const rocketsReserved = rockets.filter((rocket) => rocket.reserved === true);

  return (
    <div className="profile-page">
      <ul className="missions-profile">
        <h2>Rockets Reserved</h2>
        {rocketsReserved.length === 0
          ? <li className="no-mission">No Rockets Reserved</li>
          : rocketsReserved.map((rocket) => (
            <li key={rocket.id} className="mission-wrapper">
              <h4 className="name">
                {rocket.rocket_name}
                <a href={rocket.wikipedia} target="blanc">
                  ➕
                </a>
              </h4>
              <button
                className={rocket.reserved ? 'leave-mission' : 'join'}
                type="button"
                onClick={() => dispatch(reserve({ rocket }))}
              >
                {rocket.reserved ? 'Cancel Rocket' : 'Join Rocket' }
              </button>
            </li>
          ))}
      </ul>
      <ul className="missions-profile">
        <h2>Dragons Reserved</h2>
        {dragonReserved.length === 0
          ? <li className="no-mission">No Dragons Reserved</li>
          : dragonReserved.map((dragon) => (
            <li key={dragon.id} className="mission-wrapper">
              <h4 className="name">
                {dragon.name}
                <a href={dragon.wikipedia} target="blanc">
                  ➕
                </a>
              </h4>
              <button
                className={dragon.reserved ? 'leave-mission' : 'join'}
                type="button"
                onClick={() => dispatch(reserveDragon({ dragon }))}
              >
                {dragon.reserved ? 'Cancel Dragon' : 'Reserve Dragon' }
              </button>
            </li>
          ))}
      </ul>
      <ul className="missions-profile">
        <h2>Missions Reserved</h2>
        {missionReserved.length === 0
          ? <li className="no-mission">No Missions Reserved</li>
          : missionReserved.map((mission) => (
            <li key={mission.mission_id} className="mission-wrapper">
              <h4 className="name">
                {mission.mission_name}
                <a href={mission.wikipedia} target="blanc">
                  ➕
                </a>
              </h4>
              <button
                className={mission.reserved ? 'leave-mission' : 'join'}
                type="button"
                onClick={() => dispatch(reserveMission({ mission }))}
              >
                {mission.reserved ? 'Cancel Mission' : 'Join Mission' }
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Profile;
