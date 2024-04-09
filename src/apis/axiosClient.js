import axios from 'axios';
import queryString from 'query-string';

const axiosClient = axios.create({
  baseURL: 'https://eventhub-sever.onrender.com',
  // baseURL: 'http://192.168.1.244:3001',
  paramsSerializer: params => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async config => {
  config.headers = {
    Authorization: '',
    Accept: 'application/json',
    ...config.headers,
  };

  config.data;

  return config;
});

axiosClient.interceptors.response.use(
  res => {
    // console.log(res);
    if (res.status === 200 && res.data) {
      return res.data;
    }
  },
  error => {
    console.log(error);
    throw new Error(error);
  },
);

export default axiosClient;
