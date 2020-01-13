import { FETCH_MOVIES, SEARCH_MOVIE } from "./types";

export const fetchMovies = () => dispatch => {
  fetch("https://www.omdbapi.com/?s=batman&apikey=7a3ecfb6&type=movie")
    .then(response => response.json())
    .then(data =>
      dispatch({
        type: FETCH_MOVIES,
        payload: data.Search
      })
    )
    .catch(error => console.log(error));
};
