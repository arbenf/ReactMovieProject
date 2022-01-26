import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../../../store/actions/movieActions";
import styles from "./tvShowInfo.module.css";

const tvShowInfo = (props) => {
  const passActorId = (actorId) => {
    props.onGetActorDetails(actorId);
    props.onGetActorImages(actorId);
  };

  const {
    backdrop_path,
    name,
    overview,
    first_air_date,
    genres,
  } = props.tvShowInfo;

  const { cast, crew } = props.credits;
  console.log("TvCast: ", cast);
  console.log("TvCrew: ", crew);

  const tvShowgenres = genres.map((genre) => (
    <span key={genre.id}> {genre.name} </span>
  ));

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
    .filter((c) => c.known_for_department === "Directing")
    .map((c) => <span key={c.id}>{c.name}</span>);

  return (
    <div className={styles.tvShowInfoContainer}>
      <img
        className={styles.image}
        src={"https://image.tmdb.org/t/p/w500" + backdrop_path}
        width="600"
        height="350"
        alt="tvShowPoster"
      />
      <h3 className={styles.title}>{name}</h3>

      <div className={styles.plot}>
        <h3>Plot</h3>
        {overview}
      </div>
      <div className={styles.info}>
        <div className={styles.genre}>
          <b>Genre:</b>
          {tvShowgenres}
        </div>
        <div className={styles.director}>
          <b>Director: </b>
          {director}
        </div>

        {/* <div className={styles.imdbRating}>imdbRating: {imdbRating}</div> */}
        <div className={styles.relaesed}>
          <b>Release date: </b> {first_air_date}
        </div>
        {/* <div className={styles.watchProviders}>
          <p>
            <b>Can be seen on (US):</b> {watchMovie}
          </p>
          <p>
            <b>Buy (US):</b> {buyMovie}
          </p>
        </div> */}
      </div>
      <div className={styles.actors}>
        <h3>Cast</h3>
        <ul>{actors}</ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    tvShowInfo: state.tvShows.tvShow,
    credits: state.tvShowCredits.credits,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetActorDetails: (actorId) => dispatch(actions.getActorDetails(actorId)),
    onGetActorImages: (actorId) => dispatch(actions.getActorImages(actorId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(tvShowInfo);
