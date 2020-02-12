import React, { Component } from "react";
import Movie from "./Movie";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { fetchMovies } from "../actions/movieActions";

class Movies extends Component {
  componentDidMount() {
    this.props.fetchMovies();
    console.log("Movies componentDidMount", this.props.movies);
  }
  shouldComponentUpdate() {
    console.log("Movies shouldComponentUpdate");
    return true;
  }
  render() {
    return (
      console.log("Movies render", this.props.movies),
      (
        <div className="movies">
          {this.props.movies.map(movie => (
            <Movie movie={movie} key={movie.imdbID} />
          ))}
        </div>
      )
    );
  }
}

Movies.propTypes = {
  fetchMovies: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  movies: state.movies.items
});

export default connect(
  mapStateToProps,
  { fetchMovies }
)(Movies);
