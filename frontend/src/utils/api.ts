import axios from 'axios';
export const api = (multipart?: boolean, sec?: boolean) => {
  const instance = axios.create({
    headers: {
      'Content-Type': `${
        multipart ? 'multipart/form-data' : 'application/json'
      }`,
      withCredentials: sec ? true : false
    },
    baseURL: 'http://localhost:8000/',
    timeout: 60000,
  });

  instance.interceptors.request.use(
    async function (config: any) {
      if (localStorage.getItem('access_token')) {
        config.headers!.Authorization = `Bearer ${localStorage.getItem(
          'access_token'
        )}`;
      }
      return { ...config };
    },
    function (error: any) {
      return Promise.reject(error);
    }
  );

  instance.interceptors.request.use(
    function (response: any) {
      return response;
    },
    function (error: any) {
      return Promise.reject(error);
    }
  );
  let refresh = false;
  instance.interceptors.response.use(resp => resp, async error => {
    if (error.response.status === 401 && !refresh && localStorage.getItem('refresh_token')) {
        refresh = true;
        const response = await axios.post('http://localhost:8000/token/refresh/', {
            refresh:localStorage.getItem('refresh_token')
        }, {
            headers: {
              'Content-Type': 'application/json',
            },
            // withCredentials: true
          });

        if (response.status === 200) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data['access']}`;
            localStorage.setItem('access_token', response.data.access);
            localStorage.setItem('refresh_token', response.data.refresh);

            return axios(error.config);
        }
    }
    refresh = false;
    return error;
});

  return instance;
};

export default api;
