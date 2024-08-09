import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGPTSearch: false,
    movies: null,
    movieNames: null,
  },
  reducers: {
    toggleGPTSearchView: (state, action) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
    addMovieResult: (state, action) => {
      const { moviesN, moviesResults } = action.payload;
      state.movieNames = moviesN;

      state.movies = moviesResults;
    },
  },
});

export default gptSlice.reducer;

export const { toggleGPTSearchView, addMovieResult } = gptSlice.actions;
