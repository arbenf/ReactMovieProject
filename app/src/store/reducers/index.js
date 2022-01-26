import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import movieCreditsReducer from "./movieCreditsReducer";
import tvShowReducer from "./tvShowReducer";
import tvShowCreditsReducer from "./tvShowCreditsReducer";

const allReducers = combineReducers({
  movies: movieReducer,
  movieCredits: movieCreditsReducer,
  tvShows: tvShowReducer,
  tvShowCredits: tvShowCreditsReducer,
});

export default allReducers;
