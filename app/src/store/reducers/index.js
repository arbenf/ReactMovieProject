import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import creditsReducer from "./creditsReducer";
import tvShowReducer from "./tvShowReducer";

const allReducers = combineReducers({
  movies: movieReducer,
  credits: creditsReducer,
  tvShows: tvShowReducer,
});

export default allReducers;
