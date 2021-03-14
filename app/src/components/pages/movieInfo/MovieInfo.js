import React from "react";
import Loading from "../../../components/loading/Loading";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import styles from "./movieInfo.module.css";

const movieInfo = (props) => {
 
    const {
      backdrop_path,
      title,
      overview,
      genres,
      imdbRating,
      release_date
    } = props.movie;

    const { cast, crew } = props.credits;

    let actors = cast.map(actor => {
      return (
        <li>
          <img 
            src={"https://image.tmdb.org/t/p/w500" + actor.profile_path}
            width="100"
            height="150" 
            alt="profile_image" 
          />
          <div>
            <p>{actor.original_name}</p>
            <p className={styles.character}>{actor.character}</p>
          </div>
        </li>
      );
    })

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
              {crew
                .filter((c) => c.department === "Directing")
                .map((c) => (
                  <span key={c.id}>{c.name}</span>
                ))}
            </div>
            
            {/* <div className={styles.imdbRating}>imdbRating: {imdbRating}</div> */}
            <div className={styles.relaesed}><b>Released: </b> {release_date}</div>
          </div>
          <div className={styles.actors}>
              <h3>Cast</h3>
              <ul>{actors}</ul>
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
