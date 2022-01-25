import * as actionTypes from "./types";

const API_KEY = "6a63a37017cbb2d7c209d1bdafb1f600";
const baseUrl = "https://api.themoviedb.org/3/";

export const fetchTvShows = () => {
  return (dispatch) => {
    fetch(`${baseUrl}trending/tv/day?api_key=${API_KEY}`)
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
    fetch(`${baseUrl}tv/${id}?api_key=${API_KEY}&language=en-US`)
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
