import React, { Component } from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import MovieInfo from "./pages/MovieInfo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Movie extends Component {
  render() {
    const { Poster, Title, Year } = this.props.movie;
    return (
      <Router>
        <div>
          <div className="movie">
            <Link className="movieLink" to="/movieInfo">
              <img src={Poster} width="400" height="550" alt="moviePoster" />
              <p>{Title}</p>
            </Link>
            <h4>Release date: {Year}</h4>
          </div>
          <div>
            <Switch>
              <Route
                exact
                path="/movieInfo"
                render={props => (
                  // <React.Fragment>
                  <MovieInfo
                    movieInfo={Title}
                    // movieInfo={this.state.movies}
                    // showMovieInfo={this.showMovieInfo}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

Movie.propTypes = {
  movie: propTypes.object.isRequired
};

export default Movie;
