import React from "react";
import Search from "../search/Search";
import ScrollMoives from "../scrollMovies/scrollMovies";
import styles from "./home.module.css";
import InputSearchHome from "../search/searchResults";

const home = (props) => {
  console.log("styles: ", styles);
  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeContent}>
        <Search styles={styles.homeInput} />
        <ScrollMoives />
      </div>
    </div>
  );
};

export default home;
