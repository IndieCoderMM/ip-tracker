import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import IpifyService from '../../services/IpifyService';

export const getClientLocation = createAsyncThunk(
  'client/getCurrentIp',
  async () => {
    try {
      const res = await IpifyService.getIpAddress();
      const clientIp = res.data.ip;
      const clientLocation = await IpifyService.getGeoByIp(clientIp);
      // const balance = await IpifyService.getRemainingCredits();
      console.log(clientLocation.data);
      return clientLocation.data;
    } catch (err) {
      console.error(err);
      return err.message;
    }
  },
);

const initialState = {
  status: 'idle',
  data: {},
  error: '',
};

const clientSlice = createSlice({
  name: 'client',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getClientLocation.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getClientLocation.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.payload;
      })
      .addCase(getClientLocation.fulfilled, (state, action) => {
        state.status = 'success';
        state.data = action.payload;
      });
  },
});

export const selectLocation = (state) => state.client.data.location;

export default clientSlice.reducer;
