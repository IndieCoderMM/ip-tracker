import axios from 'axios';

const API_KEY = process.env.REACT_APP_IPIFY_KEY;

const getIpAddress = () => axios.get('https://api64.ipify.org?format=json');

const getGeoByIp = (ip) =>
  axios.get('https://geo.ipify.org/api/v2/country,city', {
    params: { apiKey: API_KEY, ipAddress: ip },
  });

const getGeoByDomain = (domain) =>
  axios.get('https://geo.ipify.org/api/v2/country,city', {
    params: { apiKey: API_KEY, domain },
  });

const getRemainingCredits = () =>
  axios.get(`https://geo.ipify.org/service/account-balance`, {
    mode: 'no-cors',
    params: {
      apiKey: API_KEY,
    },
  });

const IpifyService = {
  getIpAddress,
  getGeoByIp,
  getGeoByDomain,
  getRemainingCredits,
};

export default IpifyService;
