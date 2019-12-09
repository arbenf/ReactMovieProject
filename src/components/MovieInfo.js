import React, { Component } from "react";
import PropTypes from "prop-types";

class MovieInfo extends Component {
  render() {
    return this.props.movieInfo.map(movie => (
      <img src={movie.Poster} alt="dsfs" />
    ));
  }
}

MovieInfo.propTypes = {
  movieInfo: PropTypes.array.isRequired
};

export default MovieInfo;
