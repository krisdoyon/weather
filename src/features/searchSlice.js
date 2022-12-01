import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  isError: false,
  error: null,
  isDropdownOpen: false,
  query: "",
  results: null,
};

export const getSearchResults = createAsyncThunk(
  "search/getSearchResults",
  async (query, thunkAPI) => {
    try {
      thunkAPI.dispatch(openDropdown());
      const response = await axios(
        `https://nominatim.openstreetmap.org/search?format=json&q=${query}`
      );
      return response.data;
    } catch (error) {}
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    openDropdown: (state) => {
      state.isDropdownOpen = true;
    },
    closeDropdown: (state) => {
      state.isDropdownOpen = false;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getSearchResults.pending, (state) => {
      state.isLoading = true;
      state.results = null;
    });
    builder.addCase(getSearchResults.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.results = payload;
    });
    builder.addCase(getSearchResults.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.isError = true;
      state.error = payload;
    });
  },
});

export const { openDropdown, closeDropdown } = searchSlice.actions;

export default searchSlice.reducer;
