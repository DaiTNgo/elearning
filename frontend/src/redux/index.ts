import { configureStore } from '@reduxjs/toolkit';
import authenSlice from './authenSlice';
import playSlice from './playSlice';
import searchSlice from './searchSlice';
const store = configureStore({
  reducer: {
    auth: authenSlice,
    start: playSlice,
    search: searchSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
