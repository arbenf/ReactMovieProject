import React, { Component } from "react";
import PropTypes from "prop-types";
import Movie from "../Movie";

import { connect } from "react-redux";
// import { movieInfo } from "../../actions/movieActions";

class MovieInfo extends Component {
  // componentDidMount() {
  //   //   this.props.movies.filter(movie =>
  //   //     // console.log("TITLE", movie.Title)
  //   //         fetch(
  //   //           `https://www.omdbapi.com/?t=${movie.Title}&apikey=7a3ecfb6`
  //   //         )
  //   //           .then(res => res.json())
  //   //           .then(data => this.setState({ movies: data }));
  //   //     }
  //   //   );
  //   //   // console.log("MovieInfo title", title);
  //   //   // fetch(`https://www.omdbapi.com/?t=${title}&apikey=7a3ecfb6`)
  //   //   //   .then(res => res.json())
  //   //   //   .then(data => this.setState({ movies: data }));
  //   // }
  //   // componentDidMount() {
  //   //   fetch(`https://www.omdbapi.com/?t=${this.props.title}&apikey=7a3ecfb6`)
  //   //     .then(response => response.json())
  //   //     .then(data => this.setState({ movies: data }))
  //   //     .catch(error => console.log(error));
  //   // this.props.movieInfo(this.props.movie.Title);
  // }

  render() {
    console.log("Inside MovieInfo", this.props.movie.Title);
    // console.log("MovieInfo", this.state.movies);
    // const { Title, Poster } = this.state.movies
    const { Poster, Plot } = this.props.movie;
    return (
      <div>
        {/* <img src={this.props.title} alt="img" /> */}
        <img src={Poster} width="400" height="550" alt="moviePoster" />
        <p>{Plot}</p>
      </div>
    );
  }
}

// MovieInfo.propTypes = {
//   movieInfo: PropTypes.string.isRequired
// };

const mapStateToProps = state => ({
  movie: state.movies.item
});

export default connect(
  mapStateToProps
  // { movieInfo }
)(MovieInfo);
