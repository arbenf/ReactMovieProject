import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import creditsReducer from "./creditsReducer";

const allReducers = combineReducers({
  movies: movieReducer,
  credits: creditsReducer
});

export default allReducers;
