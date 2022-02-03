import React from "react";
import Search from "../search/Search";
import styles from "./home.module.css";
import InputSearchHome from "../search/searchResults";

const home = (props) => {
  console.log("styles: ", styles);
  return (
    <div className={styles.homeContainer}>
      <Search styles={styles.homeInput} />
    </div>
  );
};

export default home;
