import React from "react";
import { Link } from "react-router-dom";
import styles from "./tvShow.module.css";

const tvShow = (props) => {
  const { poster_path, name, id } = props.tvShow;

  return (
    <div className={styles.tvShow}>
      <Link to="/movieInfo" className={styles.tvShowLink}>
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

export default tvShow;
