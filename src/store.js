/*
import { createStore } from "redux";

const PUT = "PUT";

const putMovies = (movies) => {
  return {
    type: PUT,
    movies,
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case PUT:
      return action.movies;
    default:
      return state;
  }
};

const store = createStore(reducer);

export const actionCreators = {
  putMovies,
};
*/

import { configureStore, createSlice } from "@reduxjs/toolkit";

const movies = createSlice({
  name: "movies",
  initialState: [],
  reducers: {
    put: (state, action) => action.payload,
  },
});

const store = configureStore({ reducer: movies.reducer });

export const { put } = movies.actions;

export default store;
