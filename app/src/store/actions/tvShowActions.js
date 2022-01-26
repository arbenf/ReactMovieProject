import * as actionTypes from "./types";

const API_KEY = "6a63a37017cbb2d7c209d1bdafb1f600";
const BASE_URL = "https://api.themoviedb.org/3/";

export const fetchTvShows = () => {
  return (dispatch) => {
    fetch(`${BASE_URL}trending/tv/day?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) =>
        dispatch({
          type: actionTypes.FETCH_TV_SHOWS,
          payload: data.results,
        })
      )
      .catch((error) => console.log(error));
  };
};

export const tvShowInfo = (id) => {
  return (dispatch) => {
    fetch(`${BASE_URL}tv/${id}?api_key=${API_KEY}&language=en-US`)
      .then((response) => response.json())
      .then((data) =>
        dispatch({
          type: actionTypes.TVSHOW_INFO,
          payload: data,
        })
      )
      .catch((error) => console.log(error));
  };
};

export const tvShowCredits = (id) => {
  return (dispatch) => {
    fetch(`${BASE_URL}tv/${id}/credits?api_key=${API_KEY}&language=en-US`)
      .then((response) => response.json())
      .then((data) =>
        dispatch({
          type: actionTypes.TV_CREDITS,
          payload: data,
        })
      )
      .catch((error) => console.log(error));
  };
};

export const getWatchProviders = (id) => (dispatch) => {
  dispatch({
    type: actionTypes.GET_WATCH_PROVIDERS_LOADING,
  });
  fetch(`${BASE_URL}tv/${id}/watch/providers?api_key=${API_KEY}`)
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: actionTypes.GET_WATCH_PROVIDERS,
        payload: data,
      })
    )
    .catch((error) => console.log(error));
};
