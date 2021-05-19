import React from "react";
import Search from "../search/Search";
import { Link } from "react-router-dom";

import styles from "./header.module.css";

function header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li className={styles.logo}>
            <Link className={styles.headerLink} to="/">
              The Movie Finder
            </Link>
          </li>
          <div className={styles.dropdown}>
            <li className={styles.genres}>Movies</li>
            <div className={styles.dropdownContent}>
              <a href="#">Popular</a>
              <a href="#">Top 100</a>
              <a href="#">New releases</a>
            </div>
          </div>
          <div className={styles.dropdown}>
            <li className={styles.genres}>Tv Shows</li>
            <div className={styles.dropdownContent}>
              <a href="#">Popular</a>
              <a href="#">Top 100</a>
              <a href="#">New releases</a>
            </div>
          </div>
          <li className={styles.fourth}>
            <Search />
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
