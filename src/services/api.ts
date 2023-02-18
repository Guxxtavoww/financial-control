import axios from 'axios';

const api = axios.create({ baseURL: 'https://dummyjson.com' });

const errorAlert = (error?: string) => {
  alert('Erro de api');
  console.log(error || 'Erro de api');
};

api.interceptors.response.use(
  resonse => {
    if (resonse.status !== 200) {
      errorAlert();
      return Promise.reject(resonse);
    }

    return Promise.resolve(resonse);
  },
  error => {
    errorAlert(error);
    return Promise.reject(error);
  }
);

export default api;
