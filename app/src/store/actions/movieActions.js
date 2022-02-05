import * as actionTypes from "./types";

const API_KEY = "6a63a37017cbb2d7c209d1bdafb1f600";
const BASE_URL = "https://api.themoviedb.org/3/";

export const fetchMovies = () => {
  return (dispatch) => {
    fetch(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) =>
        dispatch({
          type: actionTypes.FETCH_MOVIES,
          payload: data.results,
        })
      )
      .catch((error) => console.log(error));
  };
};

export const getUpcomingMovies = () => (dispatch) => {
  fetch(
    `${BASE_URL}movie/upcoming?api_key=${API_KEY}&language=en-US&page=1&region=SE`
  )
    .then((response) => response.json())
    .then((data) =>
      dispatch({
        type: actionTypes.GET_UPCOMING_MOVIES,
        payload: data,
      })
    );
};

export const searchMovie = (title) => (dispatch) => {
  console.log("searchTitle inside Redux: ", title);
  fetch(
    `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${title}&page=1&include_adult=false`
  )
    .then((response) => response.json())
    .then((data) =>
      dispatch({
        type: actionTypes.SEARCH_MOVIE,
        payload: data.results,
      })
    )
    .catch((error) => console.log(error));
};

export const movieInfo = (id) => (dispatch) => {
  dispatch({
    type: actionTypes.MOVIEINFO_LOADING,
  });
  fetch(`${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`)
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: actionTypes.MOVIE_INFO,
        payload: data,
      })
    )
    .catch((error) => console.log(error));
};

export const movieCredits = (id) => (dispatch) => {
  dispatch({
    type: actionTypes.CREDITS_LOADING,
  });
  fetch(`${BASE_URL}movie/${id}/credits?api_key=${API_KEY}`)
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: actionTypes.CREDITS,
        payload: data,
      })
    );
};

export const getActorDetails = (actorId) => (dispatch) => {
  dispatch({
    type: actionTypes.ACTOR_DETAILS_LOADING,
  });
  fetch(`${BASE_URL}person/${actorId}?api_key=${API_KEY}`)
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: actionTypes.GET_ACTOR_DETAILS,
        payload: data,
      })
    );
};

export const getActorImages = (actorId) => (dispatch) => {
  dispatch({
    type: actionTypes.IMAGES_LOADING,
  });
  fetch(`${BASE_URL}person/${actorId}/images?api_key=${API_KEY}`)
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: actionTypes.GET_ACTOR_IMAGES,
        payload: data.profiles,
      })
    );
};

export const getWatchProviders = (movieId) => (dispatch) => {
  dispatch({
    type: actionTypes.GET_WATCH_PROVIDERS_LOADING,
  });
  fetch(`${BASE_URL}movie/${movieId}/watch/providers?api_key=${API_KEY}`)
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: actionTypes.GET_WATCH_PROVIDERS,
        payload: data,
      })
    )
    .catch((error) => console.log(error));
};
