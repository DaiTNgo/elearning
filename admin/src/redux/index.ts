import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import courseSlice from './courseSlice';
const store = configureStore({
	reducer: {
		authSlice,
		courseSlice,
	},
});
export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
