import * as actionTypes from "./types";

const API_KEY = "6a63a37017cbb2d7c209d1bdafb1f600";

export const fetchMovies = () => {
  return (dispatch) => {
    fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) =>
        dispatch({
          type: actionTypes.FETCH_MOVIES,
          payload: data.results
        })
      )
      .catch((error) => console.log(error));
  };
};

export const searchMovie = (title) => (dispatch) => {
  console.log("searchTitle inside Redux: ", title);
  fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${title}&page=1&include_adult=false`
  )
    .then((response) => response.json())
    .then((data) =>
      dispatch({
        type: actionTypes.SEARCH_MOVIE,
        payload: data.results
      })
    )
    .catch((error) => console.log(error));
};

export const movieInfo = (id) => (dispatch) => {
  fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
  )
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: actionTypes.MOVIE_INFO,
        payload: data
      })
    )
    .catch((error) => console.log(error));
};

export const credits = (id) => (dispatch) => {
  fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}
  `)
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: actionTypes.CREDITS,
        payload: data
      })
    );
};
