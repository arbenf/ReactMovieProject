import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import movieCreditsReducer from "./movieCreditsReducer";
import tvShowReducer from "./tvShowReducer";
import tvShowCreditsReducer from "./tvShowCreditsReducer";
import personReducer from "./personReducer";

const allReducers = combineReducers({
  movies: movieReducer,
  movieCredits: movieCreditsReducer,
  tvShows: tvShowReducer,
  tvShowCredits: tvShowCreditsReducer,
  persons: personReducer,
});

export default allReducers;
