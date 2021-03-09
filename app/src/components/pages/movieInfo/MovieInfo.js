import React, { Component } from "react";
import Loading from "../../../components/loading/Loading";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import styles from "./movieInfo.module.css";

const movieInfo = (props) => {
 
    const {
      poster_path,
      title,
      overview,
      genres,
      imdbRating,
      Released
    } = props.movie;

    const { cast, crew } = props.credits;

    if (props.loading) {
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
          src={"https://image.tmdb.org/t/p/w500" + poster_path}
          width="400"
          height="550"
          alt="moviePoster"
        />
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.movieDetails}>
          <div className={styles.plot}>
            <h3>Plot</h3>
            {overview}
          </div>
          <div className={styles.info}>
            <div className={styles.genre}>
              Genre:
              {genres.map((genre) => (
                <span key={genre.id}> {genre.name} </span>
              ))}
            </div>
            <div className={styles.director}>
              Director:
              {crew
                .filter((c) => c.department === "Directing")
                .map((c) => (
                  <span key={c.id}>{c.name}</span>
                ))}
            </div>
            {/* <div className={styles.actors}>Actors: {Actors}</div>
            <div className={styles.imdbRating}>imdbRating: {imdbRating}</div> */}
            <div className={styles.relaesed}>Released: {Released}</div>
          </div>
        </div>
      </div>
    );
  
}

movieInfo.propTypes = {
  movie: PropTypes.object.isRequired,
  credits: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  movie: state.movies.item,
  credits: state.credits.item,
  loading: state.credits.loading
});

export default connect(mapStateToProps)(movieInfo);
