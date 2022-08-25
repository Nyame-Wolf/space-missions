import { useDispatch, useSelector } from 'react-redux';
import { reserveMission } from '../redux/missions/missionsSlice';
import { reserveDragon } from '../redux/dragons/dragonsSlice';
import '../components/profile/Profile.css';
import Rockets from './Rockets';
import MyProfileRocket from '../components/profile/MyProfileRocket';

const Profile = () => {
  const dispatch = useDispatch();
  const missionList = useSelector((state) => state.missions);
  const dragonList = useSelector((state) => state.dragons);

  const missionReserved = missionList.filter((mission) => mission.reserved === true);
  const dragonReserved = dragonList.filter((dragon) => dragon.reserved === true);

  return (
    <div className="profile-page">
      <ul className="missions-profile">
        <h2>Rockets Reserved</h2>
        {/* {rocketsReserved.length === 0
          ? <li className="no-mission">No Rockets Reserved</li> */}
        <div className="rockets-profile"><Rockets component={MyProfileRocket} rocketFilter={((rocket) => rocket.reserved)} /></div>

      </ul>

      <ul className="missions-profile">
        <h2>Dragons Reserved</h2>
        {dragonReserved.length === 0
          ? <li className="no-mission">No Dragons Reserved</li>
          : dragonReserved.map((dragon) => (
            <li key={dragon.id} className="mission-wrapper">
              <h4 className="name">
                {dragon.name}
                <a href={dragon.wikipedia} target="_blank" rel="noopener noreferrer">
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
                <a href={mission.wikipedia} target="_blank" rel="noopener noreferrer">
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
