import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'play',
  initialState: {
    keyword: '',
  },
  reducers: {
    onChange(state, action) {
      state.keyword = action.payload;
    },
    clickClose(state) {
      state.keyword = '';
    },
  },
});
export const { clickClose, onChange } = searchSlice.actions;
export default searchSlice.reducer;
