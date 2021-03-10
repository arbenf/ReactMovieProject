import React from "react";
import { Link } from "react-router-dom";

import styles from "./header.module.css";

function header() {
  return (
    <header className={styles.header}>
      <img
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
      <div className={styles.div} />
    </header>
  );
}

export default header;
