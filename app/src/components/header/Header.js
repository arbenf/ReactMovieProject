import React, { Component } from "react";
import Search from "../search/Search";
import { Link } from "react-router-dom";

import styles from "./header.module.css";

class Header extends Component {
  state = {
    show: true,
    scrollPos: 0,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    console.log(document.body.getBoundingClientRect());
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > this.state.scrollPos,
    });
  };

  render() {
    return (
      <header className={this.state.show ? styles.active : styles.hidden}>
        <nav>
          <ul>
            <li className={styles.logo}>
              <Link className={styles.headerLink} to="/">
                TheMovieFinder
              </Link>
            </li>
            <div className={styles.dropdown}>
              <Link className={styles.link} to="/movies">
                <li className={styles.genres}>Movies</li>
              </Link>
              <div className={styles.dropdownContent}>
                <a href="#">Popular</a>
                <a href="#">Top 100</a>
                <a href="#">New releases</a>
              </div>
            </div>
            <div className={styles.dropdown}>
              <Link className={styles.link} to="tvShows">
                <li className={styles.genres}>Tv Shows</li>
              </Link>
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
      </header>
    );
  }
}

export default Header;
