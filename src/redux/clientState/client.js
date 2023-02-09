import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import IpifyService from '../../services/IpifyService';

export const getClientLocation = createAsyncThunk(
  'client/getClientLocation',
  async () => {
    const res = await IpifyService.getIpAddress();
    const clientIp = res.data.ip;
    const clientLocation = await IpifyService.getGeoByIp(clientIp);
    // const balance = await IpifyService.getRemainingCredits();
    // console.log('Balance Remaining: ', balance.data.credits);
    return clientLocation.data;
  },
);

const initialState = {
  status: 'idle',
  data: {
    ip: '8.8.8.8',
    location: {
      country: 'US',
      region: 'California',
      city: 'Mountain View',
      lat: 37.40599,
      lng: -122.078514,
      postalCode: '94043',
      timezone: '-07:00',
      geonameId: 5375481,
    },
    domains: [
      '0d2.net',
      '003725.com',
      '0f6.b0094c.cn',
      '007515.com',
      '0guhi.jocose.cn',
    ],
    as: {
      asn: 15169,
      name: 'Google LLC',
      route: '8.8.8.0/24',
      domain: 'https://about.google/intl/en/',
      type: 'Content',
    },
    isp: 'Google LLC',
  },
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
        state.error = action.error.message;
      })
      .addCase(getClientLocation.fulfilled, (state, action) => {
        state.status = 'success';
        state.data = action.payload;
      });
  },
});

export default clientSlice.reducer;
