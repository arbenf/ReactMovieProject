import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { movieInfo } from "../../actions/movieActions";

import "./movie.css";

class Movie extends Component {
  title = () => {
    console.log("Inside Movie", this.props.movie.Title);
    this.props.movieInfo(this.props.movie.Title);
  };

  render() {
    const { Poster, Title, Year } = this.props.movie;

    return (
      <div className="movie">
        <Link to="/movieInfo" className="movieLink" onClick={this.title}>
          <img src={Poster} width="400" height="550" alt="moviePoster" />
          <p>{Title}</p>
        </Link>
        <h4>Release date: {Year}</h4>
      </div>
    );
  }
}

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
  movieInfo: PropTypes.func.isRequired
};

// const mapStateToProps = state => ({
//   movies: state.movies.items,
//   movie: state.movies.item
// });

export default connect(
  null,
  { movieInfo }
)(Movie);
