import React, { Component } from "react";
import Movie from "./Movie";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import {Container, Row, Col} from 'reactstrap';
class Movies extends Component {
  render() {
    // return (
    //   <div className="movies">
    //     <div>
    //       {/* <Movie
    //        movie={movie}
    //        key={movie.imdbID}
    //        /> */}
    //        zfsdgd
    //     </div>
    //      <div>
    //       {/* <Movie
    //        movie={movie}
    //        key={movie.imdbID}
    //        /> */}
    //        zfsdgd
    //     </div>
    //      <div>
    //       {/* <Movie
    //        movie={movie}
    //        key={movie.imdbID}
    //        /> */}
    //        zfsdgd
    //     </div>
    //   </div>
    // )

    return (
      <div className="movies">
        {this.props.movies.map(movie => (
          <Movie movie={movie} key={movie.imdbID} />
        ))}
      </div>
    );
  }
}

Movies.propTypes = {
  movies: PropTypes.array.isRequired
};

export default Movies;
