const axios = require('axios');

const BASE_URL = process.env.URL_DOMAIN;

const callApi = async (method, endpoint, data = null) => {
  try {
    const url = `${BASE_URL}/${endpoint}`;
    const options = {
      method,
      url,
      headers: {
        'App-Key': 'ezTURIfT5ksOx2uIRWYSsADIMv15a1mFrFTPs4myGBA',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'User-Agent': 'PDA'
    },
      data
    };

    const response = await axios(options);
    return response.data;
  } catch (error) {
    console.error('Error calling API:', error);
    throw error;
  }
};

exports.getApi = (endpoint) => callApi('GET', endpoint);
exports.postApi = (endpoint, data) => callApi('POST', endpoint, data);
