import { getAccessToken } from './../../../admin/src/redux/authSlice';
import { useAppSelector } from './../hooks/redux';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
const BASE_URL = 'http://localhost:5000';
export default axios.create({
  baseURL: BASE_URL,
});
export const axiosAuth = axios.create({
  baseURL: `${BASE_URL}/auth`,
  headers: {
    'Content-Type': 'application/json',
  },
});
const refreshToken = async () => {
  try {
    const res = await axios({
      method: 'post',
      url: `${BASE_URL}/auth/refreshtoken`,
      withCredentials: true,
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
const accessToken = useAppSelector((state) => state.auth.accessToken);
// axiosAuth.interceptors.request.use(
//   async (config) => {
//     let date = new Date();
//     const decodedToken = jwt_decode(accessToken);
//     //@ts-ignore
//     if (decodedToken.exp < date.getTime() / 1000) {
//       const data = await refreshToken();

//       //@ts-ignore
//       config.headers['authorization'] = 'Bearer ' + data.accessToken;
//     }
//     return config;
//   },
//   (err) => {
//     return Promise.reject(err);
//   }
// );
export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    // authorization: `Bearer ${JSON.parse(localStorage.getItem('token')!)}`,
  },
  withCredentials: true,
});

export const axiosInstructor = axios.create({
  baseURL: `${BASE_URL}/instructor/`,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${''}`,
  },
  withCredentials: true,
});

export const axiosCourse = axios.create({
  baseURL: `${BASE_URL}/course`,
  headers: {
    'Content-Type': 'application/json',
  },
});
/**
 * const refresh = async () =>{
 * const response = await axios.post('/refresh',{
 *  withCredentials:true;// accept cookies
 * })
 * }
 */

/**
 * useEffect(() =>{
 * const isMounted = true;
 * const getUsers = () =>{
 *  const controller = new AbortController();
 *try{
     *  await axios.get('/users',{
     * signal: controller.signal})
}catch(err){
    console.log(err);
}}
getUsers();
return () =>{
    isMounted = false;
    controller.abort();
}

 *
 * }
 * })
 */
