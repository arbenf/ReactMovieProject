import React from "react";
import { Link } from "react-router-dom";
import styles from "./footer.module.css";

const footer = (props) => {
  return (
    <div className={styles.footer}>
      <p className={styles.logo}>TheMovieFinder</p>
      <div className={styles.logoAndInfo}>
        <div className={styles.tmdbLogo}>
          <p>
            This product uses the TMDB API but is not endorsed or certified by
            TMDB.
          </p>
          <img
            src={
              "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
            }
            width="100"
            height="150"
            alt="logo"
          />
        </div>
        <div className={styles.InfoAndContact}>
          <Link className={styles.footerLink} to="/about">
            <p>About The Movie Finder</p>
          </Link>
          <Link className={styles.footerLink} to="/contact">
            <p>Contact</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default footer;
