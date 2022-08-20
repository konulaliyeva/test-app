import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./redux/login/slice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});