import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  rockets: [],
  lifecycle: { loading: 'initial' },
};

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

    reserve: (state, action) => ({
      ...state,
      rockets: state.rockets.map((rocket) => {
        if (rocket.id !== action.payload.rocket.id) {
          return rocket;
        }
        return { ...rocket, reserved: !rocket.reserved };
      }),
    }),

  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(
        getRockets.fulfilled,
        (state, action) => ({ lifecycle: { loading: 'initial' }, rockets: action.payload }),
      )
      .addCase(
        getRockets.pending,
        (state) => ({ lifecycle: { loading: 'pending' }, rockets: state.rockets }),
      ).addCase(
        getRockets.rejected,
        (state) => ({ lifecycle: { loading: 'rejected' }, rockets: state.rockets }),
      );
  },

});

export const { reserve } = rocketSlice.actions;
export default rocketSlice.reducer;
