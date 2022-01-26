import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../store/actions/tvShowActions";
import styles from "./tvShow.module.css";

const tvShow = (props) => {
  const passTvShowId = (id) => {
    props.onTvShowInfo(id);
    props.onCredits(id);
  };

  const { poster_path, name, id } = props.tvShow;

  return (
    <div className={styles.tvShow}>
      <Link
        to="tvShowInfo"
        className={styles.tvShowLink}
        onClick={() => passTvShowId(id)}
      >
        <img
          className={styles.image}
          src={"https://image.tmdb.org/t/p/w500" + poster_path}
          width="400"
          height="550"
          alt="tvShowPoster"
        />
        <p>{name}</p>
      </Link>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTvShowInfo: (id) => dispatch(actions.tvShowInfo(id)),
    onCredits: (id) => dispatch(actions.tvShowCredits(id)),
  };
};

export default connect(null, mapDispatchToProps)(tvShow);
