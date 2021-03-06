import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import * as actions from  "../../store/actions/movieActions";

import styles from "./movie.module.css";

const movie = (props) => {

  const passMovieId = () => {
    props.onMovieInfo(props.movie.id);
    props.onCredits(props.movie.id);
  };

    const { poster_path, title, release_date } = props.movie;

    return (
      <div className={styles.movie}>
        <Link to="/movieInfo" className={styles.movieLink} onClick={() => passMovieId()}>
          <img
            className={styles.image}
            src={"https://image.tmdb.org/t/p/w500" + poster_path}
            width="400"
            height="550"
            alt="moviePoster"
          />
          <p>{title}</p>
        </Link>
        <h4>Release date: {release_date}</h4>
      </div>
    );
  
}

movie.propTypes = {
  onMovieInfo: PropTypes.func.isRequired,
  onCredits: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMovieInfo: (id) => dispatch(actions.movieInfo(id)),
    onCredits: (id) => dispatch(actions.credits(id))
  }
}

export default connect(
  null,
 mapDispatchToProps
)(movie);
