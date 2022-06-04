import axios, { AxiosInstance } from 'axios';
import jwt_decode from 'jwt-decode';
const BASE_URL = 'http://localhost:5000';

export const axiosAuth = axios.create({
  baseURL: `${BASE_URL}/auth`,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// axios.interceptors.request.use(
//   async function (config) {
//     const accessToken = useAppSelector((state) => state.authSlice.accessToken);
//     //@ts-ignore
//     if (new Date().getTime() > jwt_decode(accessToken).exp) {
//       const resp = await axios({
//         method: 'post',
//         withCredentials: true,
//         url: `${BASE_URL}/auth/refreshtoken`,
//       });
//       //@ts-ignore
//       config.headers['authorization'] = 'Bearer ' + resp.data.accessToken;
//     }
//     return config;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );

//------------------
export const axiosUser = axios.create({
  baseURL: `${BASE_URL}/user`,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});
//TODO:
export function createInterceptors(
  accessToken: string,
  axiosInstance: AxiosInstance
) {
  const myInterceptor = axiosInstance.interceptors.request.use(
    async function (config) {
      //@ts-ignore
      if (new Date().getTime() / 1000 > jwt_decode(accessToken).exp) {
        const resp = await axios({
          method: 'post',
          withCredentials: true,
          url: `${BASE_URL}/auth/refreshtoken`,
        });
        //@ts-ignore
        config.headers['authorization'] = 'Bearer ' + resp.data.accessToken;
      }
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  axios.interceptors.request.eject(myInterceptor);
}
// axiosUser.interceptors.request.use(
//   async function (config) {
//     const resp = await axios({
//       method: 'post',
//       withCredentials: true,
//       url: `${BASE_URL}/auth/refreshtoken`,
//     });
//     //@ts-ignore
//     config.headers['authorization'] = 'Bearer ' + resp.data.accessToken;
//     return config;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );

//------------------
export const axiosInstructor = axios.create({
  baseURL: `${BASE_URL}/instructor`,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// axiosInstructor.interceptors.request.use(
//   async function (config) {
//     const resp = await axios({
//       method: 'post',
//       withCredentials: true,
//       url: `${BASE_URL}/auth/refreshtoken`,
//     });
//     //@ts-ignore
//     config.headers['authorization'] = 'Bearer ' + resp.data.accessToken;
//     return config;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );
//------------------
export const axiosCourse = axios.create({
  baseURL: `${BASE_URL}/course`,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});
// axiosCourse.interceptors.request.use(
//   async function (config) {
//     const resp = await axios({
//       method: 'post',
//       withCredentials: true,
//       url: `${BASE_URL}/auth/refreshtoken`,
//     });
//     //@ts-ignore
//     config.headers['authorization'] = 'Bearer ' + resp.data.accessToken;
//     return config;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );
