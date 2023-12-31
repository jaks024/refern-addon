import { API_URL } from './../config';
import Axios from 'axios';

export const axios = Axios.create({
  baseURL: API_URL,
});

export const setAxiosAuthHeader = (authToken: string) => {
  axios.defaults.headers.common['Authorization'] = authToken;
};

export const getAxiosAuthHeader = () => {
  return axios.defaults.headers.common['Authorization']?.toString();
};

axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // add logging here
    // const message = error.response?.data?.message || error.message;
    // useNotificationStore.getState().addNotification({
    //   type: 'error',
    //   title: 'Error',
    //   message,
    // });

    return Promise.reject(error);
  },
);
