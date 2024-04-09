import axiosClient from './axiosClient';

class AuthAPI {
  HandleAuthentication = async (url, data, method) => {
    return await axiosClient(`/auth${url}`, {
      method: method ?? 'get',
      data,
    });
  };
}

const AuthenticationAPI = new AuthAPI();
export default AuthenticationAPI;
