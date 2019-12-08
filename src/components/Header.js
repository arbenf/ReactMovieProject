import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link className="headerLink" to="./">
        Movie Finder
      </Link>
    </header>
  );
}

export default Header;
