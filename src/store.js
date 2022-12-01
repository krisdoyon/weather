import { configureStore } from "@reduxjs/toolkit";
import weatherSlice from "./features/weatherSlice";
import searchSlice from "./features/searchSlice";

export const store = configureStore({
  reducer: {
    weather: weatherSlice,
    search: searchSlice,
  },
});
