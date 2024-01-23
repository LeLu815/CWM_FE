import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
  name: "language",
  initialState: {
    language: "en",
    languageOption: {
      kor: "한국어",
      en: "English",
      ja: "にほんご",
      zh: "中國語",
      tw: "臺灣語",
      th: "ภาษาไทย",
    },
  },
  reducers: {
    changeLanguage(state, action) {
      const newLang = action.payload;
    },
  },
});

export const languageAction = languageSlice.actions;
export default languageSlice;
