import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './userSlice';
import authenSlice from './authenSlice';
import courseInstructorSlice from './intructor/courseInstructorSlice';
const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authenSlice,
    instructorCourse: courseInstructorSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;