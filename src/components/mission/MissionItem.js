import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { reserveMission } from '../../redux/missions/missionsSlice';
import './Missions.css';

const MissionItem = (props) => {
  const dispatch = useDispatch();
  const { mission } = props;
  return (
    <tr>
      <td className="name">{mission.mission_name}</td>
      <td className="description">
        {mission.description}
        <a href={mission.wikipedia} target="blanc">
          🔗
        </a>
      </td>
      <td>
        <span className={mission.reserved ? 'active-member' : 'not-member'}>
          {mission.reserved ? 'Active Member' : 'Not A Member'}
        </span>
      </td>
      <td>
        <button
          className={mission.reserved ? 'leave-mission' : 'join'}
          type="button"
          onClick={() => dispatch(reserveMission({ mission }))}
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
      wikipedia: PropTypes.string,
    },
  ).isRequired,
};
export default MissionItem;
