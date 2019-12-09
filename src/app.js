import React, { Component } from "react";
import Movies from "./components/Movies";
import Search from "./components/Search";
import Header from "./components/Header";
import MovieInfo from "./components/MovieInfo";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  state = {
    movies: [
      // {Poster: "https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"},
      // {Poster: "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},
      // // {Poster: "https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg"}
    ]
  };

  componentDidMount() {
    fetch("https://www.omdbapi.com/?s=batman&apikey=7a3ecfb6&type=movie")
      .then(response => response.json())
      .then(data => this.setState({ movies: data.Search }))
      .catch(error => console.log(error));
  }

  searchTitle = title => {
    console.log("searchTitle: ", title);
    fetch(`https://www.omdbapi.com/?s=${title}&apikey=7a3ecfb6`)
      .then(response => response.json())
      .then(data => this.setState({ movies: data.Search }))
      .catch(error => console.log(error));
  };

  render() {
    return (
      <Router>
        <React.Fragment>
          <Header />
          <Route
            path="/"
            render={props => (
              <React.Fragment>
                <Search searchTitle={this.searchTitle} />
                <Movies movies={this.state.movies} />
              </React.Fragment>
            )}
          />
          <Route path="/movieInfo" component={MovieInfo} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;