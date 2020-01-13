import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
  state = {
    title: ""
  };
  handleClick = event => {
    console.log("handleClick", this.state.title);
    event.preventDefault();
    this.props.searchTitle(this.state.title);
    this.setState({ title: "" });
  };

  handleInput = event => {
    console.log(event.target.value);
    this.setState({ title: event.target.value });
    // console.log("Search handleInput".this.state.title);
  };

  render() {
    return (
      <form className="searchForm" onSubmit={this.handleClick}>
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
  searchTitle: PropTypes.func.isRequired
};

export default Search;
