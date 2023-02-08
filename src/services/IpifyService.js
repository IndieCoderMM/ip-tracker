import axios from 'axios';

const API_KEY = process.env.REACT_APP_IPIFY_KEY;

const getIpAddress = () => axios.get('https://api64.ipify.org?format=json');

const getGeoByIp = (ip) =>
  axios.get('https://geo.ipify.org/api/v2/country,city', {
    params: { apiKey: API_KEY, ipAddress: ip },
  });

const getRemainingCredits = () =>
  axios('https://geo.ipify.org/service/account-balance', {
    method: 'GET',
    mode: 'no-cors',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    withCredentials: true,
    params: { apiKey: API_KEY },
  });

const IpifyService = {
  getIpAddress,
  getGeoByIp,
  getRemainingCredits,
};

export default IpifyService;
