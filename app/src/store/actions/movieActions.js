import * as actionTypes from "./types";

const API_KEY = "6a63a37017cbb2d7c209d1bdafb1f600";
const baseUrl = "https://api.themoviedb.org/3/";

export const fetchMovies = () => {
  return (dispatch) => {
    fetch(`${baseUrl}trending/movie/day?api_key=${API_KEY}`)
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
    `${baseUrl}search/movie?api_key=${API_KEY}&language=en-US&query=${title}&page=1&include_adult=false`
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
  dispatch({
    type: actionTypes.MOVIEINFO_LOADING
  })
  fetch(
    `${baseUrl}movie/${id}?api_key=${API_KEY}&language=en-US`
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
  dispatch({
    type: actionTypes.CREDITS_LOADING
  })
  fetch(`${baseUrl}movie/${id}/credits?api_key=${API_KEY}`)
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: actionTypes.CREDITS,
        payload: data,
      })
    );
};

export const getActorDetails = (actorId) => (dispatch) => {
  fetch(`${baseUrl}person/${actorId}?api_key=${API_KEY}`)
  .then((res) => res.json())
  .then((data) => 
    dispatch({
      type: actionTypes.GET_ACTOR_DETAILS,
      payload: data
    })
  )
};
