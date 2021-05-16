import React from "react";
import { Link } from "react-router-dom";

import styles from "./header.module.css";

function header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li className={styles.logo}>The Movie Finder</li>
          <li className={styles.genres}>Movies</li>
          <li className={styles.genres}>Tv Shows</li>
          <li className={styles.fourth}>
            <input type="text" placeholder="Search" />
          </li>
        </ul>
      </nav>

      {/* <img
        src={
          "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
        }
        width="100"
        height="150"
        alt="logo"
      />
      <Link className={styles.headerLink} to="/">
        Movie Finder
      </Link>
      <div className={styles.div} /> */}
    </header>
  );
}

export default header;
