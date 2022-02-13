import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Movie from "../movie/Movie";
import * as actions from "../../store/actions/movieActions";
import styles from "./scrollMovies.module.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faFontAwesome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fas, faFontAwesome);

class ScrollMovies extends Component {
  state = {
    srollMoviesWidth: null,
    moviesContainerWidth: null,
    scrollPosition: 0,
    scrollAmount: 1300,
  };

  scrollMoviesWidth = React.createRef();
  moviesContainerWidth = React.createRef();

  componentDidMount() {
    this.props.onGetUpcomingMovies();
    console.log("componentDidMount");
  }

  componentDidUpdate(prevProps) {
    let srollMoviesWidth = this.scrollMoviesWidth.current.offsetWidth;
    let moviesContainerWidth = this.moviesContainerWidth.current.offsetWidth;
    if (this.props.upComingMovies !== prevProps.upComingMovies) {
      this.setState({ srollMoviesWidth, moviesContainerWidth });
    }
    console.log("componentDidUpdate");
  }

  scrollMovies = (val) => {
    let maxScroll =
      -this.state.moviesContainerWidth + this.state.srollMoviesWidth;
    let scrollPosition = this.state.scrollPosition;
    scrollPosition += val * this.state.scrollAmount;

    if (scrollPosition > 0) {
      scrollPosition = 0;
    }

    if (scrollPosition < maxScroll) {
      scrollPosition = maxScroll;
    }

    this.setState({ scrollPosition });
  };

  render() {
    return (
      <div className={styles.scrollMovieContainer}>
        <h2>Upcoming</h2>
        <div className={styles.scrollMovies} ref={this.scrollMoviesWidth}>
          <button onClick={() => this.scrollMovies(1)}>
            <FontAwesomeIcon icon="fa-solid fa-angle-left" size="2x" />
          </button>
          <button onClick={() => this.scrollMovies(-1)}>
            <FontAwesomeIcon icon="fa-solid fa-angle-right" size="2x" />
          </button>
          <div
            style={{
              left: this.state.scrollPosition,
            }}
            className={styles.moviesContainer}
            ref={this.moviesContainerWidth}
          >
            {this.props.upComingMovies.results.map((movie) => (
              <Movie
                styles={styles.movie}
                key={movie.id}
                movie={movie}
                width={"200"}
                height={"300"}
              />
            ))}
          </div>
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
