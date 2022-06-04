import { RootState } from './index';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axiosAuth, axiosUser, createInterceptors } from '../axios';
import axios from 'axios';

interface ICurrentUser {
  id: number;
  email: string;
  user_name: string;
  avatar: string;
  description: string;
  acc_twiter: string;
  my_website: string;
  role: 'user' | 'admin' | 'instructor';
}
interface InitTialStateType {
  accessToken: undefined | string;
  currentUser: ICurrentUser | undefined;
  error: string | undefined;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}
export const login = createAsyncThunk(
  'user/login',
  async ({ email, password }: { email: string; password: string }) => {
    try {
      const response = await axiosAuth({
        method: 'post',
        url: '/login',
        data: {
          email,
          password,
        },
      });

      if (response.data.success && response.data.message.role === 'instructor')
        return response.data;
      else {
        throw new Error(response.data.message);
      }
    } catch (error: any) {
      throw new Error(error);
    }
  }
);
export const logout = createAsyncThunk(
  'user/logout',
  async (accessToken: InitTialStateType['accessToken']) => {
    try {
      await axiosAuth({
        method: 'post',
        url: '/logout',
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      });
    } catch (error: any) {
      throw new Error(error);
    }
  }
);
export const updateUser = createAsyncThunk(
  'user/update',
  async ({
    accessToken,
    userUpdate,
  }: {
    accessToken: string;
    userUpdate: Omit<ICurrentUser, 'id' | 'role' | 'email'>;
  }) => {
    try {
      const data = {
        username: userUpdate.user_name,
        avatar: userUpdate.avatar,
        description: userUpdate.description,
        acctwiter: userUpdate.acc_twiter,
        mywebsite: userUpdate.my_website,
      };
      //TODO:
      createInterceptors(accessToken, axiosUser);
      // axios.interceptors.request.eject(myInterceptor);
      const resp = await axiosUser({
        method: 'put',
        url: '/update',
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
        data: data,
      });
      if (resp.data.success) {
        return resp.data.message;
      } else {
        throw new Error(resp.data.message);
      }
    } catch (error: any) {
      throw new Error(error);
    }
  }
);
const initialState: InitTialStateType = {
  accessToken: undefined,
  currentUser: undefined,
  status: 'idle',
  error: '',
};
const authenSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setStatus: (state) => {
      state.status = 'idle';
    },
  },
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.accessToken = action.payload.accessToken;
        state.currentUser = action.payload.message;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = 'Something is wrong!!!. Try again.';
      });
    builder
      .addCase(logout.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.status = 'idle';
        state.accessToken = undefined;
        state.currentUser = undefined;
      })
      .addCase(logout.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
    builder
      .addCase(updateUser.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.currentUser = action.payload;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const getAccessToken = (state: RootState) => state.authSlice.accessToken;
export const getUser = (state: RootState) => state.authSlice.currentUser;

export const { setStatus } = authenSlice.actions;

export default authenSlice.reducer;
