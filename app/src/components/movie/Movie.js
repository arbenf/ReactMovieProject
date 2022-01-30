import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import * as actions from "../../store/actions/movieActions";

import styles from "./movie.module.css";

const movie = (props) => {
  const passMovieId = (id) => {
    props.onMovieInfo(id);
    props.onCredits(id);
    props.onWatchProviders(id);
  };

  const { poster_path, title, id } = props.movie;

  return (
    <div className={styles.movie}>
      <Link
        to="/movieInfo"
        className={styles.movieLink}
        onClick={() => passMovieId(id)}
      >
        <img
          className={styles.image}
          src={"https://image.tmdb.org/t/p/w500" + poster_path}
          width="400"
          height="550"
          alt="moviePoster"
        />
        <p>{title}</p>
      </Link>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMovieInfo: (id) => dispatch(actions.movieInfo(id)),
    onCredits: (id) => dispatch(actions.movieCredits(id)),
    onWatchProviders: (id) => dispatch(actions.getWatchProviders(id)),
  };
};

movie.propTypes = {
  onMovieInfo: PropTypes.func.isRequired,
  onCredits: PropTypes.func.isRequired,
  onWatchProviders: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(movie);
