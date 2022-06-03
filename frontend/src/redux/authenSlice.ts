import { RootState } from './index';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axiosAuth } from '../utils/axios';
import { loginService } from '../services/login';
type CurrentUserType = {
  id: number;
  email: string;
  user_name: string;
  avatar: string;
  description: string;
  acc_twiter: string;
  my_website: string;
  role: 'user' | 'admin' | 'instructor';
};
type InitTialStateType = {
  accessToken: string;
  currentUser: CurrentUserType | undefined;
  error: string | undefined;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
};
export const login = createAsyncThunk(
  'user/login',
  async ({ email, password }: { email: string; password: string }) => {
    const response = await loginService({ email, password });
    if (response.success) return response;
    else {
      throw new Error(response.message);
    }
  }
);

const initialState: InitTialStateType = {
  accessToken: '',
  currentUser: undefined,
  status: 'idle',
  error: '',
};
const authenSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
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
        state.error = action.error.message;
      });
  },
});

export const getAccessToken = (state: RootState) => state.auth.accessToken;
export const getUser = (state: RootState) => state.auth.currentUser;

export default authenSlice.reducer;
