import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Movie from "../movie/Movie";
import * as actions from "../../store/actions/movieActions";
import styles from "./scrollMovies.module.css";

class ScrollMovies extends Component {
  state = {
    srollMoviesWidth: null,
    moviesContainerWidth: null,
    scrollPosition: 0,
    scrollAmount: 600,
  };

  constructor(props) {
    super(props);
    this.scrollMoviesWidth = React.createRef();
    this.moviesContainerWidth = React.createRef();
  }

  componentDidMount() {
    this.props.onGetUpcomingMovies();
    let srollMoviesWidth = this.scrollMoviesWidth.current.offsetWidth;
    let moviesContainerWidth = this.moviesContainerWidth.current.offsetWidth;
    this.setState({
      srollMoviesWidth,
      moviesContainerWidth,
    });
  }

  scrollMovies = (val) => {
    console.log("scrollMoviesWidth", this.state.srollMoviesWidth);
    console.log("moviesContainerWidth", this.state.moviesContainerWidth);
    let maxScroll =
      -this.state.moviesContainerWidth + this.state.srollMoviesWidth;
    let scrollPosition = this.state.scrollPosition;
    console.log("before: ", scrollPosition);
    scrollPosition += val * this.state.scrollAmount;
    console.log("after: ", scrollPosition);

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
            left
            {/* <i className="fas fa-chevron-left"></i> */}
          </button>
          <button onClick={() => this.scrollMovies(-1)}>Right</button>
          <div
            style={{ left: this.state.scrollPosition }}
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
