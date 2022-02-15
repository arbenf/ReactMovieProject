import React from "react";
import Search from "../search/Search";
import ScrollContent from "../scrollContent/scrollContent";
import styles from "./home.module.css";

const home = (props) => {
  console.log("styles: ", styles);
  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeContent}>
        <Search styles={styles.homeInput} />
        <ScrollContent />
      </div>
    </div>
  );
};

export default home;
