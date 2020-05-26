import React, { Component } from "react";
import Loading from "../../../components/loading/Loading";
import PropTypes from "prop-types";
import { movieInfo } from "../../../actions/movieActions";
import Movies from "../../movies/Movies";

import { connect } from "react-redux";

import styles from "./movieInfo.module.css";

class MovieInfo extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    //Wait until data is fetched
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  }

  render() {
    console.log("movieInfo render", this.props.movie.Title);

    const {
      Poster,
      Title,
      Plot,
      Genre,
      Director,
      Actors,
      imdbRating,
      Released
    } = this.props.movie;

    if (this.state.loading) {
      return (
        <div className={styles.loading}>
          <Loading />
        </div>
      );
    }

    return (
      <div className={styles.movieInfoContainer}>
        <img
          className={styles.image}
          src={Poster}
          width="400"
          height="550"
          alt="moviePoster"
        />
        <h3 className={styles.title}>{Title}</h3>
        <div className={styles.movieDetails}>
          <div className={styles.plot}>
            <h3>Plot</h3>
            {Plot}
          </div>
          <div className={styles.info}>
            <div className={styles.genre}>Genre: {Genre}</div>
            <div className={styles.director}>Director: {Director}</div>
            <div className={styles.actors}>Actors: {Actors}</div>
            <div className={styles.imdbRating}>imdbRating: {imdbRating}</div>
            <div className={styles.relaesed}>Released: {Released}</div>
          </div>
        </div>
      </div>
    );
  }
}

MovieInfo.propTypes = {
  movieInfo: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  movie: state.movies.item
});

export default connect(
  mapStateToProps,
  { movieInfo }
)(MovieInfo);
