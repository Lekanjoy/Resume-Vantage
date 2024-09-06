import { resultData } from "@/data";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = resultData;

const AISuggestionsSlice = createSlice({
  name: "suggestions",
  initialState,
  reducers: {
    updateSuggestions: (state, action: PayloadAction<string[]>) => {
        return action.payload;
      },
  },
});
export const { updateSuggestions } = AISuggestionsSlice.actions;
export default AISuggestionsSlice.reducer;
