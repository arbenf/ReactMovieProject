import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { searchMovie } from "../../actions/movieActions";

import styles from "./search.module.css";

class Search extends Component {
  state = {
    title: ""
  };
  handleClick = event => {
    console.log("handleClick", this.state.title);
    event.preventDefault();
    this.props.searchMovie(this.state.title);
    this.setState({ title: "" });
  };

  handleInput = event => {
    console.log(event.target.value);
    this.setState({ title: event.target.value });
    // console.log("Search handleInput".this.state.title);
  };

  render() {
    return (
      <form className={styles.searchForm} onSubmit={this.handleClick}>
        <input
          type="text"
          placeholder="Enter title"
          // value={this.state.title}
          onChange={this.handleInput}
        />
        {/* <Link to="/"> */}
        <input type="submit" value="Search" />
        {/* </Link> */}
      </form>
    );
  }
}

Search.propTypes = {
  searchMovie: PropTypes.func.isRequired
};

export default connect(
  null,
  { searchMovie }
)(Search);
