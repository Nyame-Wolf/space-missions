import { useDispatch, useSelector } from 'react-redux';
import { reserveMission } from '../redux/missions/missionsSlice';
import '../components/Profile.css';
import { reserve } from '../redux/rockets/rockets';

const Profile = () => {
  const dispatch = useDispatch();
  const missionList = useSelector((state) => state.missions);
  const rockets = useSelector((state) => state.rockets);
  const missionReserved = missionList.filter((mission) => mission.reserved === true);
  const rocketsReserved = rockets.filter((rocket) => rocket.reserved === true);

  return (
    <div className="profile-page">
      <ul className="missions-profile">
        <h2>Missions Reserved</h2>
        {missionReserved.length === 0
          ? <li className="mission-wrapper">No Missions Reserved</li>
          : missionReserved.map((mission) => (
            <li key={mission.mission_id} className="mission-wrapper">
              <h4 className="name">{mission.mission_name}</h4>
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
      <div className="rockets-profile" />
      <ul className="missions-profile">
        <h2>Rockets Reserved</h2>
        {rocketsReserved.length === 0
          ? <li className="mission-wrapper">No rockets Reserved</li>
          : rocketsReserved.map((rocket) => (
            <li key={rocket.id} className="mission-wrapper">
              <h4 className="name">{rocket.rocket_name}</h4>
              <button
                className={rocket.reserved ? 'leave-mission' : 'join'}
                type="button"
                onClick={() => dispatch(reserve({ rocket }))}
              >
                {rocket.reserved ? 'Cancel Mission' : 'Join Mission' }
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Profile;
