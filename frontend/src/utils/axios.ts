import axios from 'axios';
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
