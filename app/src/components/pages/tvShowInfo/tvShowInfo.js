import React from "react";
import { connect } from "react-redux";

import styles from "./tvShowInfo.module.css";

const tvShowInfo = (props) => {
  const {
    backdrop_path,
    name,
    overview,
    first_air_date,
    genres,
  } = props.tvShowInfo;

  const tvShowgenres = genres.map((genre) => (
    <span key={genre.id}> {genre.name} </span>
  ));

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
        {/* <div className={styles.director}>
          <b>Director: </b>
          {crew
            .filter((c) => c.department === "Directing")
            .map((c) => (
              <span key={c.id}>{c.name}</span>
            ))}
        </div> */}

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
      {/* <div className={styles.actors}>
        <h3>Cast</h3>
        <ul>{actors}</ul>
      </div> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    tvShowInfo: state.tvShows.tvShow,
  };
};
export default connect(mapStateToProps)(tvShowInfo);
