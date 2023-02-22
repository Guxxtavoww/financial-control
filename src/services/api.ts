import axios, { isCancel } from 'axios';

const api = axios.create({ baseURL: 'http://openlibrary.org' });

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
    if (isCancel(error)) return;
    errorAlert(error);
    return Promise.reject(error);
  }
);

export default api;
