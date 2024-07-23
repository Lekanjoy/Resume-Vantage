import { createSlice } from "@reduxjs/toolkit";

const resumeHeaderSlice = createSlice({
  name: "newTask",
  initialState: {
    tasks: [],
    loading: false,
    selectedTask: {}
  },
  reducers: {

  },
});

export const {  } = resumeHeaderSlice.actions;

export default resumeHeaderSlice.reducer;
