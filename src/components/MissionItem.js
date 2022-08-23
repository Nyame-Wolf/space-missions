import React from 'react';
import PropTypes from 'prop-types';
import './Missions.css';

const MissionItem = (props) => {
  const {
    id, name, description, reserved, onAddMission, onRemoveMission,
  } = props;

  return (
    <tr key={id}>
      <td className="name">{name}</td>
      <td className="description">{description}</td>
      <td>
        <span className={reserved ? 'active-member' : 'not-member'}>
          {reserved ? 'Active Member' : 'Not A Member'}
        </span>
      </td>
      <td>
        {reserved ? (
          <button
            type="button"
            className="leave-mission"
            onClick={() => onRemoveMission(id)}
          >
            Leave Mission
          </button>
        ) : (
          <button
            type="button"
            className="join"
            onClick={() => onAddMission(id)}
          >
            Join Mission
          </button>
        )}
      </td>
    </tr>
  );
};

MissionItem.propTypes = {
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  onAddMission: PropTypes.func.isRequired,
  onRemoveMission: PropTypes.func.isRequired,
};

export default MissionItem;
