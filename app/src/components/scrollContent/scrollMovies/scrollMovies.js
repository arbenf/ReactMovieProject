import React, { Component } from "react";
import PropTypes from "prop-types";
import Movie from "../../movie/Movie";
import styles from "./scrollMovies.module.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas, faFontAwesome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fas, faFontAwesome);

class ScrollMovies extends Component {
  state = {
    srollMoviesWidth: null,
    moviesContainerWidth: null,
    scrollPosition: 0,
    scrollAmount: 1100,
    buttonOpacityLeft: "60%",
    buttonOpacityRight: "60%",
  };

  scrollMoviesWidth = React.createRef();
  moviesContainerWidth = React.createRef();

  componentDidMount() {
    this.props.data();
    console.log("componentDidMount");
  }

  componentDidUpdate(prevProps) {
    let srollMoviesWidth = this.scrollMoviesWidth.current.offsetWidth;
    let moviesContainerWidth = this.moviesContainerWidth.current.offsetWidth;
    if (this.props.typeOfContent !== prevProps.typeOfContent) {
      this.setState({ srollMoviesWidth, moviesContainerWidth });
    }
    console.log("componentDidUpdate");
  }

  scrollMovies = (val) => {
    let maxScroll =
      -this.state.moviesContainerWidth + this.state.srollMoviesWidth;
    let scrollPosition = this.state.scrollPosition;
    scrollPosition += val * this.state.scrollAmount;
    let buttonOpacityLeft = this.state.buttonOpacityLeft;
    let buttonOpacityRight = this.state.buttonOpacityRight;

    if (scrollPosition > 0) {
      scrollPosition = 0;
      buttonOpacityLeft = "0%";
    } else {
      buttonOpacityLeft = "60%";
    }

    if (scrollPosition < maxScroll) {
      scrollPosition = maxScroll;
      buttonOpacityRight = "0%";
    } else {
      buttonOpacityRight = "60%";
    }

    this.setState({ scrollPosition, buttonOpacityLeft, buttonOpacityRight });
  };

  render() {
    return (
      <div className={styles.scrollMovieContainer}>
        <h2>{this.props.title}</h2>
        <div className={styles.scrollMovies} ref={this.scrollMoviesWidth}>
          <button
            style={{ opacity: this.state.buttonOpacityLeft }}
            onClick={() => this.scrollMovies(1)}
          >
            <FontAwesomeIcon icon="fa-solid fa-angle-left" size="2x" />
          </button>
          <button
            style={{ opacity: this.state.buttonOpacityRight }}
            onClick={() => this.scrollMovies(-1)}
          >
            <FontAwesomeIcon icon="fa-solid fa-angle-right" size="2x" />
          </button>
          <div
            style={{
              left: this.state.scrollPosition,
            }}
            className={styles.moviesContainer}
            ref={this.moviesContainerWidth}
          >
            {this.props.typeOfContent.results.map((c) => (
              <this.props.typeOfContainer
                styles={styles.content}
                key={c.id}
                content={c}
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

ScrollMovies.propTypes = {
  movies: PropTypes.object.isRequired,
  data: PropTypes.func.isRequired,
};

export default ScrollMovies;
