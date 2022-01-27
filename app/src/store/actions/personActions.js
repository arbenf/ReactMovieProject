import * as actionTypes from "./types";

const API_KEY = "6a63a37017cbb2d7c209d1bdafb1f600";
const BASE_URL = "https://api.themoviedb.org/3/";

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
