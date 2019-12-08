import React, { Component } from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

class Movie extends Component {
  render() {
    const { Poster, Title, Year } = this.props.movie;
    return (
      <div className="movie">
        <Link className="movieLink" to="/movieInfo">
          <img src={Poster} width="400" height="550" alt="moviePoster" />
          <p>{Title}</p>
        </Link>
        <h4>Release date: {Year}</h4>
      </div>
    );
  }
}

Movie.propTypes = {
  movie: propTypes.object.isRequired
};

export default Movie;
