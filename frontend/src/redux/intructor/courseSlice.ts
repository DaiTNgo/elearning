import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  course: {
    name: '',
    type: '',
    desc: '',
    image: '',
    price: 0,
    isTutorial: false,
    isLivestream: false,
  },
  topics: [
    {
      name: '',
      desc: '',
      link: '',
    },
  ],
};
const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.course.price += 1;
    },
  },
});
