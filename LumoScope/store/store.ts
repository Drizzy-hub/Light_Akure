import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
// ...

export const store = configureStore({
  reducer: {
    root: rootReducer,
  },
});
