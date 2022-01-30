import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
import * as movieActions from "../../store/actions/movieActions";
import * as tvShowActions from "../../store/actions/tvShowActions";

import styles from "./search.module.css";

class Search extends Component {
  state = {
    title: "",
  };
  handleClick = (event) => {
    console.log("handleClick", this.state.title);
    event.preventDefault();
    this.props.onSearchMovie(this.state.title);
    this.props.onSearchTvShow(this.state.title);
    this.setState({ title: "" });
    this.props.history.push("/searchResults");
  };

  handleInput = (event) => {
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
        <input type="submit" value="Search" />
      </form>
    );
  }
}

Search.propTypes = {
  searchMovie: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchMovie: (movieTitle) =>
      dispatch(movieActions.searchMovie(movieTitle)),
    onSearchTvShow: (movieTitle) =>
      dispatch(tvShowActions.searchTvShow(movieTitle)),
  };
};

export default connect(null, mapDispatchToProps)(withRouter(Search));
