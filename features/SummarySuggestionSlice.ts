import { summaryResultData } from "@/data";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = summaryResultData;

const SummarySuggestionSlice = createSlice({
  name: "suggestions",
  initialState,
  reducers: {
    updateSummarySuggestions: (state, action: PayloadAction<string[]>) => {
        return action.payload;
      },
  },
});
export const { updateSummarySuggestions } = SummarySuggestionSlice.actions;
export default SummarySuggestionSlice.reducer;
