import React, { Component } from "react";

class Search extends Component {
  state = {
    title: ""
  };
  handleClick = () => {
    console.log("Clicked");
  };

  searchMovie = event => {
    console.log(event.target.value);
    this.setState({ title: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleClick}>
        <input
          type="text"
          value={this.state.title}
          onChange={this.searchMovie}
        />
        <input type="submit" value="Search" />
      </form>
    );
  }
}

export default Search;
