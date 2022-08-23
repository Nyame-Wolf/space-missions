import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const baseURL = 'https://api.spacexdata.com/v3/missions';

const initialState = [];

export const getMissions = createAsyncThunk(
  'missions/getMissions',
  async () => {
    const response = await fetch(baseURL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },

    });
    if (response.ok) {
      return response.json();
    }
    throw response;
  },
);

export const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    reserve: (state, action) => state.map((mission) => {
      if (mission.mission_id !== action.payload.mission.mission_id) {
        return mission;
      }
      return { ...mission, reserved: !mission.reserved };
    }),
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getMissions.fulfilled, (state, action) => action.payload);
  },
});

// Action creators are generated for each case reducer function
export const { reserve } = missionsSlice.actions;
export default missionsSlice.reducer;
