import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { movieInfo } from "../../actions/movieActions";

import styles from "./movie.module.css";

class Movie extends Component {
  title = () => {
    console.log("Inside Movie", this.props.movie.Title);
    this.props.movieInfo(this.props.movie.Title);
  };

  render() {
    const { poster_path, title, release_date } = this.props.movie;

    return (
      <div className={styles.movie}>
        <Link to="/movieInfo" className={styles.movieLink} onClick={this.title}>
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
}

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
  movieInfo: PropTypes.func.isRequired
};

// const mapStateToProps = state => ({
//   movies: state.movies.items,
//   movie: state.movies.item
// });

export default connect(
  null,
  { movieInfo }
)(Movie);
