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

export const createOrUpdateTopic = createAsyncThunk(
	'topic',
	async ({
		info,
		accessToken,
		isUpdate,
	}: {
		isUpdate?: boolean;
		info: TopicType;
		accessToken: string;
	}) => {
		let resp;
		try {
			if (isUpdate) {
				resp = await axiosInstructor({
					method: 'put',
					url: `/update-topic`,
					data: info,
					headers: {
						Authorization: `Bearer ${accessToken}`,
					},
				});
			} else {
				resp = await axiosInstructor({
					method: 'post',
					url: `/create-topic`,
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
		resetCourse: (state) => {
			state.course = initialState.course;
		},
		resetTopics: (state) => {
			state.topics = initialState.topics;
		},
		editCourse: (state, action) => {
			state.course = action.payload;
		},
		editTopics: (state, action) => {
			state.topics = action.payload;
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
		builder
			.addCase(createOrUpdateTopic.pending, (state, action) => {
				state.status = 'loading';
			})
			.addCase(createOrUpdateTopic.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.success = true;
				const index = state.topics.findIndex(
					(topic) => topic.order === action.payload.message.order
				);
				if (index === -1) {
					state.topics.push(action.payload.message);
				} else {
					state.topics.splice(index, 1, action.payload.message);
				}
			})
			.addCase(createOrUpdateTopic.rejected, (state, action) => {
				state.status = 'failed';
				state.success = false;
			});
	},
});
export const getCourse = (state: RootState) => state.courseSlice.course;
export const getTopics = (state: RootState) => state.courseSlice.topics;
export const { editCourse, editTopics, resetTopics, resetCourse } =
	courseSlice.actions;
export default courseSlice.reducer;
