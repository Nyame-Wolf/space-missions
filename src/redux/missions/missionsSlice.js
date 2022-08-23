export const FETCH_MISSIONS = 'space-missions/missions/FETCH_MISSIONS';
const ADD_MISSIONS = 'space-missions/missions/ADD_MISSIONS';
const REMOVE_MISSIONS = 'space-missions/missions/REMOVE_MISSIONS';

const baseURL = 'https://api.spacexdata.com/v3/missions';

const missionsReducer = (state = [], action) => {
  let newState;
  switch (action.type) {
    case FETCH_MISSIONS:
      return action.missions;
    case ADD_MISSIONS:
      newState = state.map((mission) => {
        if (mission.id !== action.id) return mission;
        return { ...mission, reserved: true };
      });
      return newState;
    case REMOVE_MISSIONS:
      newState = state.map((mission) => {
        if (mission.id !== action.id) return mission;
        return { ...mission, reserved: false };
      });
      return newState;
    default:
      return state;
  }
};

export const getMissions = (missions) => ({
  type: FETCH_MISSIONS,
  missions,
});

export const addMissions = (id) => ({
  type: ADD_MISSIONS,
  id,
});

export const removeMissions = (id) => ({
  type: REMOVE_MISSIONS,
  id,
});

export const fetchMissions = () => async (dispatch) => {
  const arrayOfMissions = await fetch(baseURL)
    .then((res) => res.json())
    .then((data) => Object.entries(data).map((mission) => {
      const { description } = mission[1];
      const name = mission[1].mission_name;
      const id = mission[1].mission_id;
      const reserved = false;
      return {
        id,
        description,
        name,
        reserved,
      };
    }));

  dispatch(getMissions(arrayOfMissions));
};

export default missionsReducer;
