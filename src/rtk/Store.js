import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./slices/auth";

export const store = configureStore({
  reducer: {
    auth: AuthSlice,
  },
});
