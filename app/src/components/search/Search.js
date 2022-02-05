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
    // this.setState({ title: "" });
    this.props.history.push("/searchResults");
  };

  handleInput = (event) => {
    console.log(event.target.value);
    this.setState({ title: event.target.value });
    // console.log("Search handleInput".this.state.title);
  };

  // deleteInput = () => {
  //   console.log("Input deleted!!!");
  //   this.setState({ title: "" });
  // };

  render() {
    return (
      <form className={styles.searchForm} onSubmit={this.handleClick}>
        <input
          className={this.props.styles}
          type="search"
          placeholder="Enter title"
          value={this.state.title}
          onChange={this.handleInput}
        />
        {/* <input type="submit" value="Search" /> */}
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchMovie: (movieTitle) =>
      dispatch(movieActions.searchMovie(movieTitle)),
    onSearchTvShow: (movieTitle) =>
      dispatch(tvShowActions.searchTvShow(movieTitle)),
  };
};

Search.propTypes = {
  onSearchMovie: PropTypes.func.isRequired,
  onSearchTvShow: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(withRouter(Search));
