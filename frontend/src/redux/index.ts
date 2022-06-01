import { configureStore } from '@reduxjs/toolkit';
import authenSlice from './authenSlice';
const store = configureStore({
  reducer: {
    auth: authenSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
