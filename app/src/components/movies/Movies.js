import React, {Component} from "react";
import Movie from "../movie/Movie";
import PropTypes from "prop-types";

import {connect} from "react-redux";
import * as actions from "../../store/actions/movieActions";

import styles from "./movies.module.css";

class Movies extends Component {
  componentDidMount() {
    this.props.onFetchMovies();
  }

  render() {
    return (
      console.log("Movies render", this.props.movies),
      (
        <div className={styles.movies}>
          {this.props.movies.map((movie) => (
            <Movie movie={movie} key={movie.id} />
          ))}
        </div>
      )
    );
  }
}

Movies.propTypes = {
  movies: PropTypes.array.isRequired,
  onFetchMovies: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  movies: state.movies.movies
});

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchMovies: () => dispatch(actions.fetchMovies())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
