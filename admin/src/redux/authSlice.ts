import { RootState } from './index';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axiosAuth } from '../axios';

interface CurrentUserType {
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
	accessToken: string;
	currentUser: CurrentUserType | undefined;
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
			if (response.data.success) return response.data;
			else {
				throw new Error(response.data.message);
			}
		} catch (error: any) {
			throw new Error(error);
		}
	}
);
// export const logout = createAsyncThunk('user/logout', async () => {
// 	try {
// 		const response = await axiosAuth({
// 			method: 'post',
// 			url: '/logout',
// 		});
// 		if (response.data.success) return response.data;
// 		else {
// 			throw new Error(response.data.message);
// 		}
// 	} catch (error: any) {
// 		throw new Error(error);
// 	}
// });

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

export const getAccessToken = (state: RootState) => state.authSlice.accessToken;
export const getUser = (state: RootState) => state.authSlice.currentUser;

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default authenSlice.reducer;
