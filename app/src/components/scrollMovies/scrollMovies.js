import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Movie from "../movie/Movie";
import * as actions from "../../store/actions/movieActions";
import styles from "./scrollMovies.module.css";

class ScrollMovies extends Component {
  componentDidMount() {
    this.props.onGetUpcomingMovies();
  }
  render() {
    return (
      <div className={styles.scrollMovieContainer}>
        <h2>Upcoming</h2>
        <div className={styles.scrollMovies}>
          {this.props.upComingMovies.results.map((movie) => (
            <Movie key={movie.id} movie={movie} width={"200"} height={"300"} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { upComingMovies: state.movies.upComingMovies };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetUpcomingMovies: () => dispatch(actions.getUpcomingMovies()),
  };
};

ScrollMovies.propTypes = {
  upComingMovies: PropTypes.object.isRequired,
  onGetUpcomingMovies: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ScrollMovies);
