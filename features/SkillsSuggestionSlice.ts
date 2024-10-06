import { skillsResultData } from "@/data";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = skillsResultData;

const SkillsSuggestionSlice = createSlice({
  name: "suggestions",
  initialState,
  reducers: {
    updateSkillsSuggestions: (state, action: PayloadAction<string[]>) => {
        return action.payload;
      },
  },
});
export const { updateSkillsSuggestions } = SkillsSuggestionSlice.actions;
export default SkillsSuggestionSlice.reducer;
