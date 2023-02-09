import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import IpifyService from '../../services/IpifyService';

export const getQueryLocation = createAsyncThunk(
  'query/getQueryLocation',
  async (domain) => {
    try {
      const res = await IpifyService.getGeoByDomain(domain);
      const balance = await IpifyService.getRemainingCredits();
      console.log(res.data);
      console.log('Balance Remaining: ', balance.data.credits);
      return res.data;
    } catch (err) {
      console.error(err);
      return err.message;
    }
  },
);

const initialState = {
  status: 'idle',
  data: { location: {} },
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
        state.error = action.payload;
      })
      .addCase(getQueryLocation.fulfilled, (state, action) => {
        state.status = 'success';
        state.data = action.payload;
      });
  },
});

export default querySlice.reducer;
