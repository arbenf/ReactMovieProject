import React from "react";
import { Link } from "react-router-dom";

import styles from "./header.module.css";

function header() {
  return (
    <header className={styles.header}>
      <Link className={styles.headerLink} to="/">
        Movie Finder
      </Link>
    </header>
  );
}

export default header;
import React from "react";
import { Link } from "react-router-dom";

import styles from "./header.module.css";

function header() {
  return (
    <header className={styles.header}>
      <Link className={styles.headerLink} to="/">
        Movie Finder
      </Link>
    </header>
  );
}

export default header;
