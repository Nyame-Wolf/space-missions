import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const baseURL = 'https://api.spacexdata.com/v3/dragons';

const initialState = [];

export const getDragons = createAsyncThunk(
  'dragons/getDragons',
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

export const dragonsSlice = createSlice({
  name: 'dragons',
  initialState,
  reducers: {
    reserveDragon: (state, action) => state.map((dragon) => {
      if (dragon.id !== action.payload.dragon.id) {
        return dragon;
      }
      return { ...dragon, reserved: !dragon.reserved };
    }),
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getDragons.fulfilled, (state, action) => action.payload);
  },
});

// Action creators are generated for each case reducer function
export const { reserveDragon } = dragonsSlice.actions;
export default dragonsSlice.reducer;
