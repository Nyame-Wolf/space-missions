import { useDispatch, useSelector } from 'react-redux';
import Rockets from './Rockets';
import { reserveMission } from '../redux/missions/missionsSlice';
import '../components/Profile.css';

const Profile = () => {
  const dispatch = useDispatch();
  const missionList = useSelector((state) => state.missions);
  const missionReserved = missionList.filter((mission) => mission.reserved === true);

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
      <div className="rockets-profile"><Rockets rocketFilter={((rocket) => rocket.reserved)} /></div>
    </div>
  );
};

export default Profile;
