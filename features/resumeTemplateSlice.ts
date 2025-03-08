import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ResumeTemplateState {
  selectedTemplate: string;
}

const initialState: ResumeTemplateState = {
  selectedTemplate: "template1",
};

const resumeTemplateSlice = createSlice({
  name: "resumeReference",
  initialState,
  reducers: {
    updateTemplate: (state, action: PayloadAction<string>) => {
      state.selectedTemplate = action.payload;
    },
  },
});

export const { updateTemplate } = resumeTemplateSlice.actions;

export default resumeTemplateSlice.reducer;