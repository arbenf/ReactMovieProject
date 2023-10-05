import React, { Component } from "react";

import styles from "./scrollBar.module.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas, faFontAwesome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fas, faFontAwesome);

class ScrollBar extends Component {
  state = {
    scrollMoviesWidth: null,
    moviesContainerWidth: null,
    scrollPosition: 0,
    scrollAmount: 600,
    buttonOpacityLeft: "60%",
    buttonOpacityRight: "60%",
  };

  scrollMoviesWidth = React.createRef();
  moviesContainerWidth = React.createRef();

  componentDidMount() {
    let scrollMoviesWidth = this.scrollMoviesWidth.current.offsetWidth;
    let moviesContainerWidth = this.moviesContainerWidth.current.offsetWidth;
    this.setState({ scrollMoviesWidth, moviesContainerWidth });
  }

  componentDidUpdate(prevProps) {
    let scrollMoviesWidth = this.scrollMoviesWidth.current.offsetWidth;
    let moviesContainerWidth = this.moviesContainerWidth.current.offsetWidth;
    console.log("scrollMoviesWidth: ", scrollMoviesWidth);
    console.log("moviesContainerWidth: ", moviesContainerWidth);
    console.log("this.props.credits: ", this.props.credits);
    console.log("prevProps.credits: ", prevProps.credits);

    if (this.props.credits !== prevProps.credits) {
      this.setState({ scrollMoviesWidth, moviesContainerWidth });
    }
    console.log("ScrollBar componentDidUpdate");
  }

  scrollMovies = (val) => {
    console.log("scrollMovies function called");
    console.log(
      "moviesContainerWidth inside scrollMovies: ",
      this.state.moviesContainerWidth
    );
    console.log(
      "scrollMoviesWidth inside scrollMovies: ",
      this.state.scrollMoviesWidth
    );
    let maxScroll =
      -this.state.moviesContainerWidth + this.state.scrollMoviesWidth;
    let scrollPosition = this.state.scrollPosition;
    console.log("scrollAmount: ", this.state.scrollAmount);
    scrollPosition += val * this.state.scrollAmount;
    console.log("scrollPosition inside scrollMovies: ", scrollPosition);
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
    console.log("scrollPosition: ", this.state.scrollPosition);
    return (
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
          {this.props.actors}
        </div>
      </div>
    );
  }
}

export default ScrollBar;
