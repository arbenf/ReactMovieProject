import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Movie from "../movie/Movie";
import TvShow from "../tvShow/tvShow";
import styles from "./searchResults.module.css";

const searchResults = (props) => {
  console.log("MoviesearchResults: ", props.movies);
  console.log("TVsearchResults: ", props.tvShows);

  const movieResults = props.movies.map((movie) => (
    <Movie movie={movie} key={movie.id} />
  ));

  const tvShowResults = props.tvShows.map((tvShow) => (
    <TvShow tvShow={tvShow} key={tvShow.id} />
  ));

  return (
    <div className={styles.searchResults}>
      {movieResults}
      {tvShowResults}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.movies.movieSearch,
    tvShows: state.tvShows.tvShowSearch,
  };
};

searchResults.propTypes = {
  movies: PropTypes.array.isRequired,
  tvShows: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(searchResults);
