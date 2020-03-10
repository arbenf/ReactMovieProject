import React from "react";
import { Link } from "react-router-dom";

import "./header.css";

function header() {
  return (
    <header className="header">
      <Link className="headerLink" to="/">
        Movie Finder
      </Link>
    </header>
  );
}

export default header;
