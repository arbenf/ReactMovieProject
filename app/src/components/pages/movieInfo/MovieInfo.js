import React from "react";
import { Link } from "react-router-dom";
import Loading from "../../../components/loading/Loading";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import * as actions from "../../../store/actions/personActions";

import styles from "./movieInfo.module.css";

const movieInfo = (props) => {
  const passActorId = (actorId) => {
    props.onGetActorDetails(actorId);
    props.onGetActorImages(actorId);
  };

  const { backdrop_path, title, overview, genres, release_date } = props.movie;

  const { cast, crew } = props.credits;

  const { SE } = props.watchProviders.results;

  let watchMovie = null;
  let buyMovie = null;

  if (SE === undefined || SE.flatrate === undefined) {
    watchMovie = <span>Unavailable</span>;
  } else {
    watchMovie = SE.flatrate.map((object) => (
      <span key={object.provider_id}>{object.provider_name}, </span>
    ));
  }

  if (SE === undefined || SE.buy === undefined) {
    buyMovie = <span>Unavailable</span>;
  } else {
    buyMovie = SE.buy.map((object) => (
      <span key={object.provider_id}>{object.provider_name}, </span>
    ));
  }

  let actors = cast.map((actor) => {
    return (
      <li key={actor.id} onClick={() => passActorId(actor.id)}>
        <Link to="/actorsInfo">
          <img
            src={"https://image.tmdb.org/t/p/w500" + actor.profile_path}
            width="100"
            height="150"
            alt="profile_image"
          />
        </Link>
        <div>
          <p>{actor.original_name}</p>
          <p className={styles.character}>{actor.character}</p>
        </div>
      </li>
    );
  });

  let director = crew
    .filter((c) => c.department === "Directing")
    .map((c) => <span key={c.id}>{c.name}</span>);

  let movieInfo = (
    <div className={styles.movieInfoContainer}>
      <img
        className={styles.image}
        src={"https://image.tmdb.org/t/p/w500" + backdrop_path}
        width="600"
        height="350"
        alt="moviePoster"
      />
      <h3 className={styles.title}>{title}</h3>

      <div className={styles.plot}>
        <h3>Plot</h3>
        {overview}
      </div>
      <div className={styles.info}>
        <div className={styles.genre}>
          <b>Genre:</b>
          {genres.map((genre) => (
            <span key={genre.id}> {genre.name} </span>
          ))}
        </div>
        <div className={styles.director}>
          <b>Director: </b>
          {director}
        </div>

        {/* <div className={styles.imdbRating}>imdbRating: {imdbRating}</div> */}
        <div className={styles.relaesed}>
          <b>Release date: </b> {release_date}
        </div>
        <div className={styles.watchProviders}>
          <p>
            <b>Can be seen on (SE):</b> {watchMovie}
          </p>
          <p>
            <b>Buy (SE):</b> {buyMovie}
          </p>
        </div>
      </div>
      <div className={styles.actors}>
        <h3>Cast</h3>
        <ul>{actors}</ul>
      </div>
    </div>
  );

  if (props.loadingMovie && props.loadingCredits) {
    movieInfo = (
      <div className={styles.loading}>
        <Loading />
      </div>
    );
  }
  return movieInfo;
};

const mapStateToProps = (state) => ({
  movie: state.movies.movie,
  credits: state.movieCredits.credits,
  loadingCredits: state.movieCredits.loading,
  loadingMovie: state.movies.loading,
  watchProviders: state.movies.watchProviders,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onGetActorDetails: (actorId) => dispatch(actions.getActorDetails(actorId)),
    onGetActorImages: (actorId) => dispatch(actions.getActorImages(actorId)),
  };
};

movieInfo.propTypes = {
  movie: PropTypes.object.isRequired,
  credits: PropTypes.object.isRequired,
  loadingCredits: PropTypes.bool.isRequired,
  loadingMovie: PropTypes.bool.isRequired,
  watchProviders: PropTypes.object.isRequired,
  onGetActorDetails: PropTypes.func.isRequired,
  onGetActorImages: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(movieInfo);
