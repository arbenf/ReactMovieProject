import React, { Component } from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import MovieInfo from "./pages/MovieInfo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Movie extends Component {
  //Todo1. skapa state där title sätts.
  state = {
    title: ""
  };
  //Todo2. Använd title till MovieInfo componenten med hjälp av Context
  // title = () => {
  //   console.log("Inside Movie", this.props.movie.Title);
  //   this.props.title(this.props.movie.Title);
  //   // this.setState({ title: this.props.movie.Title });
  //   // console.log("Inisde movie", this.state.title);
  // };

  render() {
    const { Poster, Title, Year } = this.props.movie;
    return (
      <div className="movie">
        <Link to="/movieInfo" className="movieLink" onClick={this.title}>
          <img src={Poster} width="400" height="550" alt="moviePoster" />
          <p>{Title}</p>
        </Link>
        <h4>Release date: {Year}</h4>
      </div>
    );
  }
}

Movie.propTypes = {
  movie: propTypes.object.isRequired
};

export default Movie;
