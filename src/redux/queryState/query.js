import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import IpifyService from '../../services/IpifyService';

export const getQueryLocation = createAsyncThunk(
  'query/getQueryLocation',
  async (domain) => {
    const res = await IpifyService.getGeoByDomain(domain);
    // const balanceRes = await IpifyService.getRemainingCredits();
    // console.log('Balance Remaining: ', balanceRes.data.credits);
    return res.data;
  },
);

const initialState = {
  status: 'idle',
  data: {},
  error: '',
};

const querySlice = createSlice({
  name: 'query',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getQueryLocation.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getQueryLocation.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message;
      })
      .addCase(getQueryLocation.fulfilled, (state, action) => {
        state.status = 'success';
        state.data = action.payload;
      });
  },
});

export default querySlice.reducer;
