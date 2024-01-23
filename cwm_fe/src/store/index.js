import { configureStore } from "@reduxjs/toolkit";

import languageSlice from "./language-slice";
import userSlice from "./user-slice";

const store = configureStore({
  reducer: {
    language: languageSlice.reducer,
    user: languageSlice.reducer,
  },
});

export default store;
