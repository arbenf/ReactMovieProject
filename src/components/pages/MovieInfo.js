import React, { Component } from "react";
import PropTypes from "prop-types";
import Movie from "../Movie";

class MovieInfo extends Component {
  state = {
    movies: []
  };
  componentDidMount() {
    const title = this.props.movieInfo;
    fetch(`https://www.omdbapi.com/?t=${title}&apikey=7a3ecfb6`)
      .then(res => res.json())
      .then(data => this.setState({ movies: data }));
  }

  render() {
    console.log("MovieInfo", this.state.movies);
    return (
      <div>
        <ul>
          <li>{this.state.movies}</li>
        </ul>
      </div>
    );
  }
}

MovieInfo.propTypes = {
  movieInfo: PropTypes.string.isRequired
};

export default MovieInfo;
