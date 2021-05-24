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
    // console.log(document.body.getBoundingClientRect());
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > this.state.scrollPos,
    });
  };
  // render() {
  //   console.log(this.state);
  //   return <nav className={this.state.show ? "active" : "hidden"}>Navbar</nav>;
  // }

  render() {
    return (
      <header className={this.state.show ? styles.active : styles.hidden}>
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
}

export default Header;
