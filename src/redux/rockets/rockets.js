import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const getRockets = createAsyncThunk(
  'rockets/getRockets',
  async () => {
    const response = await fetch('https://api.spacexdata.com/v3/rockets', {
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

export const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {

    reserve: (state, action) => state.map((rocket) => {
      if (rocket.id !== action.payload.rocket.id) {
        return rocket;
      }
      return { ...rocket, reserved: !rocket.reserved };
    }),

  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getRockets.fulfilled, (state, action) => action.payload);
  },

});

export const { reserve } = rocketSlice.actions;
export default rocketSlice.reducer;
