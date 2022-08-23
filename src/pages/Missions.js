import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addMissions, fetchMissions, removeMissions } from '../redux/missions/missionsSlice';
import MissionItem from '../components/MissionItem';
import '../components/Missions.css';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);

  useEffect(() => {
    if (!missions.length) {
      dispatch(fetchMissions());
    }
  }, []);

  const onAddMissions = (specificID) => {
    dispatch(addMissions(specificID));
  };

  const onRemoveMissions = (specificID) => {
    dispatch(removeMissions(specificID));
  };

  return (
    <div className="missions-page">
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>Join</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <MissionItem
              key={mission.id}
              id={mission.id}
              name={mission.name}
              description={mission.description}
              reserved={mission.reserved}
              onAddMission={onAddMissions}
              onRemoveMission={onRemoveMissions}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
