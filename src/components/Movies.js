import React, { Component } from "react";
import Movie from "./Movie";
import PropTypes from "prop-types";
import MovieInfo from "./pages/MovieInfo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import {Container, Row, Col} from 'reactstrap';

import { connect } from "react-redux";
import { fetchMovies } from "../actions/movieActions";

class Movies extends Component {
  componentDidMount() {
    this.props.fetchMovies();
  }
  render() {
    return (
      <div className="movies">
        {this.props.movies.map(movie => (
          <Movie title={this.onClick} movie={movie} key={movie.imdbID} />
        ))}
      </div>
    );
  }
}

Movies.propTypes = {
  fetchMovies: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired,
  movie: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  movies: state.movies.items,
  movie: state.movies.item
});

export default connect(
  mapStateToProps,
  { fetchMovies }
)(Movies);
