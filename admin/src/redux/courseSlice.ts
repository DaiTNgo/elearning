import { CourseType, TopicType } from './../types/index';
import { RootState } from './index';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { axiosInstructor } from '../axios';

const initialState: {
	course: CourseType;
	topics: TopicType[];
	success: boolean;
	status: 'idle' | 'loading' | 'succeeded' | 'failed';
} = {
	course: {
		name: '',
		type: '',
		description: '',
		image: '',
		price: '',
		watch: 'normal',
	},
	topics: [],
	success: false,
	status: 'idle',
};
export const createOrUpdateCourse = createAsyncThunk(
	'course',
	async ({
		info,
		courseId,
		accessToken,
	}: {
		courseId?: number;
		info: CourseType;
		accessToken: string;
	}) => {
		let resp;
		try {
			if (courseId) {
				resp = await axiosInstructor({
					method: 'put',
					url: `/update-course/${courseId}`,
					data: info,
					headers: {
						authorization: `Bearer ${accessToken}`,
					},
				});
			} else {
				resp = await axiosInstructor({
					method: 'post',
					url: `/create-course`,
					data: info,
					headers: {
						authorization: `Bearer ${accessToken}`,
					},
				});
			}
			if (resp.data.success) {
				return resp.data;
			} else {
				throw new Error(resp.data.message);
			}
		} catch (error: any) {
			throw new Error(error);
		}
	}
);
//TODO:
export const createOrUpdateTopic = createAsyncThunk(
	'topic',
	async ({
		info,
		courseId,
		accessToken,
	}: {
		courseId?: number;
		info: CourseType;
		accessToken: string;
	}) => {
		let resp;
		try {
			if (courseId) {
				resp = await axiosInstructor({
					method: 'put',
					url: `/update-course/${courseId}`,
					data: info,
					headers: {
						Authorization: `Bearer ${accessToken}`,
					},
				});
			} else {
				resp = await axiosInstructor({
					method: 'post',
					url: `/create-course`,
					data: info,
					headers: {
						Authorization: `Bearer ${accessToken}`,
					},
				});
			}
			if (resp.data.success) {
				return resp.data;
			} else {
				throw new Error(resp.data.message);
			}
		} catch (error: any) {
			throw new Error(error);
		}
	}
);

const courseSlice = createSlice({
	name: 'course',
	initialState,
	reducers: {
		editCourse: (state, action) => {
			state.course = action.payload;
		},
		editTopic: (state, action) => {
			state.topics.splice(action.payload.index, 1, action.payload.topic);
		},
		resetCourse: (state) => {
			state.course = initialState.course;
		},
		resetTopics: (state) => {
			state.topics = initialState.topics;
		},
	},
	extraReducers(builder) {
		builder
			.addCase(createOrUpdateCourse.pending, (state, action) => {
				state.status = 'loading';
			})
			.addCase(createOrUpdateCourse.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.success = true;
				state.course = action.payload.message;
			})
			.addCase(createOrUpdateCourse.rejected, (state, action) => {
				state.status = 'failed';
				state.success = false;
			});
	},
});
export const getCourse = (state: RootState) => state.courseSlice.course;
export const getTopics = (state: RootState) => state.courseSlice.topics;
export const { editTopic, resetTopics, resetCourse } = courseSlice.actions;
export default courseSlice.reducer;
