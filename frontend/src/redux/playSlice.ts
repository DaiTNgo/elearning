import { createSlice } from '@reduxjs/toolkit';

const playSlice = createSlice({
  name: 'play',
  initialState: {
    link: '',
    isOpen: false,
  },
  reducers: {
    clickOpen(state, action) {
      state.isOpen = true;
      state.link = action.payload;
    },
    clickClose(state) {
      state.isOpen = false;
      state.link = '';
    },
  },
});
export const { clickClose, clickOpen } = playSlice.actions;
export default playSlice.reducer;
