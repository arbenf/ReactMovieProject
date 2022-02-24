import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import * as movieActions from "../../store/actions/movieActions";

import styles from "./movie.module.css";

const movie = (props) => {
  const passMovieId = (id) => {
    props.onMovieInfo(id);
    props.onMovieCredits(id);
    props.onMovieWatchProviders(id);
  };

  const { poster_path, title, id } = props.content;

  return (
    <div className={props.styles}>
      <Link
        to={"/movieInfo"}
        className={styles.movieLink}
        onClick={() => passMovieId(id)}
      >
        <img
          className={styles.image}
          src={"https://image.tmdb.org/t/p/w500" + poster_path}
          width={props.width}
          height={props.height}
          alt="moviePoster"
        />
        <p>{title}</p>
      </Link>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMovieInfo: (id) => dispatch(movieActions.movieInfo(id)),
    onMovieCredits: (id) => dispatch(movieActions.movieCredits(id)),
    onMovieWatchProviders: (id) => dispatch(movieActions.getWatchProviders(id)),
  };
};

movie.propTypes = {
  onMovieInfo: PropTypes.func.isRequired,
  onCredits: PropTypes.func.isRequired,
  onWatchProviders: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(movie);
