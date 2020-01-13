import React, { Component } from "react";
import PropTypes from "prop-types";
import Movie from "../Movie";

class MovieInfo extends Component {
  state = {
    movies: []
  };
  // componentDidMount() {
  //   this.props.movies.filter(movie =>
  //     // console.log("TITLE", movie.Title)

  //         fetch(
  //           `https://www.omdbapi.com/?t=${movie.Title}&apikey=7a3ecfb6`
  //         )
  //           .then(res => res.json())
  //           .then(data => this.setState({ movies: data }));

  //     }
  //   );

  //   // console.log("MovieInfo title", title);
  //   // fetch(`https://www.omdbapi.com/?t=${title}&apikey=7a3ecfb6`)
  //   //   .then(res => res.json())
  //   //   .then(data => this.setState({ movies: data }));
  // }
  // componentDidMount() {
  //   fetch(`https://www.omdbapi.com/?t=${this.props.title}&apikey=7a3ecfb6`)
  //     .then(response => response.json())
  //     .then(data => this.setState({ movies: data }))
  //     .catch(error => console.log(error));
  // }

  render() {
    console.log("Inside MovieInfo", this.props.title);
    // console.log("MovieInfo", this.state.movies);
    // const { Title, Poster } = this.state.movies;
    return (
      <div>
        {/* <img src={this.props.title} alt="img" /> */}
        <p>{this.props.title}</p>
      </div>
    );
  }
}

// MovieInfo.propTypes = {
//   movieInfo: PropTypes.string.isRequired
// };

export default MovieInfo;
