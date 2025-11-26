import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import * as actions from "../../../store/actions/personActions";
import Loading from "../../loading/Loading";
import styles from "./tvShowInfo.module.css";
import ScrollBar from "../scrollBar/scrollBar";

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

  const tvShowgenres = genres.map((genre) => (
    <span key={genre.id}> {genre.name} </span>
  ));

  let actors = cast.map((actor) => {
    return (
      <div
        className={styles.actorCard}
        key={actor.id}
        onClick={() => passActorId(actor.id)}
      >
        <Link to="/actorsInfo">
          <img
            src={"https://image.tmdb.org/t/p/w500" + actor.profile_path}
            width="120"
            // height="150"
            alt="profile_image"
          />
        </Link>
        <div>
          <p>{actor.original_name}</p>
          <p className={styles.character}>{actor.character}</p>
        </div>
      </div>
    );
  });

  let director = crew
    .filter((c) => c.known_for_department === "Directing")
    .map((c) => <span key={c.id}>{c.name}</span>);

  let tvShowInfo = (
    <div className={styles.wrapper}>
      <div className={styles.tvShowInfoWrapper}>
        <div className={styles.tvShowInfoContainer}>
          <img
            className={styles.image}
            src={"https://image.tmdb.org/t/p/w500" + backdrop_path}
            width="800"
            // height="350"
            alt="tvShowPoster"
          />
          <h3 className={styles.title}>{name}</h3>
          <div className={styles.info}>
            <div className={styles.plot}>
              <h3>Plot</h3>
              {overview}
            </div>

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
            <ScrollBar actors={actors} credits={props.credits} />
          </div>
        </div>
      </div>
    </div>
  );

  if (props.tvShowInfoLoading && props.creditsLoading) {
    tvShowInfo = (
      <div className={styles.loading}>
        <Loading />
      </div>
    );
  }
  return tvShowInfo;
};

const mapStateToProps = (state) => {
  return {
    tvShowInfo: state.tvShows.tvShow,
    credits: state.tvShowCredits.credits,
    watchProviders: state.tvShows.watchProviders,
    tvShowInfoLoading: state.tvShows.loading,
    creditsLoading: state.tvShowCredits.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetActorDetails: (actorId) => dispatch(actions.getActorDetails(actorId)),
    onGetActorImages: (actorId) => dispatch(actions.getActorImages(actorId)),
  };
};

tvShowInfo.propTypes = {
  tvShowInfo: PropTypes.object.isRequired,
  credits: PropTypes.object.isRequired,
  watchProviders: PropTypes.object.isRequired,
  tvShowInfoLoading: PropTypes.bool.isRequired,
  creditsLoading: PropTypes.bool.isRequired,
  onGetActorDetails: PropTypes.func.isRequired,
  onGetActorImages: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(tvShowInfo);
