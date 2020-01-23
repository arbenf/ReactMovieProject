import { FETCH_MOVIES, SEARCH_MOVIE, MOVIE_INFO } from "./types";

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

export const searchMovie = title => dispatch => {
  console.log("searchTitle inside Redux: ", title);
  fetch(`https://www.omdbapi.com/?s=${title}&apikey=7a3ecfb6`)
    .then(response => response.json())
    .then(data =>
      dispatch({
        type: SEARCH_MOVIE,
        payload: data.Search
      })
    )
    .catch(error => console.log(error));
};

export const movieInfo = title => dispatch => {
  console.log("inside movieInfo redux", title);
  fetch(`https://www.omdbapi.com/?t=${title}&apikey=7a3ecfb6`)
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: MOVIE_INFO,
        payload: data
      })
    );
};
