import { FETCH_MOVIES, SEARCH_MOVIE, MOVIE_INFO } from "./types";

const API_KEY = "7a3ecfb6";

export const fetchMovies = () => dispatch => {
  fetch(`https://www.omdbapi.com/?s=batman&apikey=${API_KEY}&type=movie`)
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
  fetch(`https://www.omdbapi.com/?s=${title}&apikey=${API_KEY}`)
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
  if (title.includes("&")) {
    let newTitle = title.replace("&", "%26");

    fetch(`https://www.omdbapi.com/?t=${newTitle}&apikey=${API_KEY}`)
      .then(res => res.json())
      .then(data =>
        dispatch({
          type: MOVIE_INFO,
          payload: data
        })
      );
  } else {
    fetch(`https://www.omdbapi.com/?t=${title}&apikey=${API_KEY}`)
      .then(res => res.json())
      .then(data =>
        dispatch({
          type: MOVIE_INFO,
          payload: data
        })
      );
  }
};
