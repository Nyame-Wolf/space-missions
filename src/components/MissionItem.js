import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { reserve } from '../redux/missions/missionsSlice';
import './Missions.css';

const MissionItem = (props) => {
  const dispatch = useDispatch();
  const { mission } = props;
  return (
    <tr>
      <td className="name">{mission.mission_name}</td>
      <td className="description">{mission.description}</td>
      <td>
        <span className={mission.reserved ? 'active-member' : 'not-member'}>
          {mission.reserved ? 'Active Member' : 'Not A Member'}
        </span>
      </td>
      <td>
        <button
          className={mission.reserved ? 'leave-mission' : 'join'}
          type="button"
          onClick={() => dispatch(reserve({ mission }))}
        >
          {mission.reserved ? 'Cancel Mission' : 'Join Mission' }
        </button>
      </td>
    </tr>
  );
};

MissionItem.propTypes = {
  mission: PropTypes.shape(
    {
      mission_id: PropTypes.string,
      mission_name: PropTypes.string,
      description: PropTypes.string,
      reserved: PropTypes.bool,
    },
  ).isRequired,
};
export default MissionItem;
