import React, { Component } from "react";
import Movie from "./Movie";
import PropTypes from "prop-types";
import MovieInfo from "./pages/MovieInfo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import {Container, Row, Col} from 'reactstrap';
class Movies extends Component {
  // onClick = title => {
  //   console.log("Inside Movies", title);
  //   this.props.title(title);
  // };

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
          <Movie title={this.onClick} movie={movie} key={movie.imdbID} />
        ))}
      </div>
    );
  }
}

Movies.propTypes = {
  movies: PropTypes.array.isRequired
};

export default Movies;
