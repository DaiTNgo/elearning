import { axiosAuth } from '../utils/axios';

export const loginService = async (data: {
  email: string;
  password: string;
}) => {
  try {
    const response = await axiosAuth({
      method: 'post',
      url: '/login',
      data,
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};
