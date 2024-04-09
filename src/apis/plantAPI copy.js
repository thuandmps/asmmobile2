import axiosClient from './axiosClient';

class API {
  HandleData = async (url, data, method) => {
    return await axiosClient(`/test${url}`, {
      method: method ?? 'get',
      data,
    });
  };
}

const PlantAPI = new API();
export default PlantAPI;
