import React, { Component } from "react";
import Movies from "./components/Movies";
import Search from "./components/Search";
import Header from "./components/Header";
import MovieInfo from "./components/pages/MovieInfo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  // searchTitle = title => {
  //   // console.log("searchTitle: ", title);
  //   // fetch(`https://www.omdbapi.com/?s=${title}&apikey=7a3ecfb6`)
  //   //   .then(response => response.json())
  //   //   .then(data => this.setState({ movies: data.Search }))
  //   //   .catch(error => console.log(error));
  //   this.props.searchMovie(title);
  // };

  // title = title => {
  //   console.log("Inside App", title);
  //   fetch(`https://www.omdbapi.com/?t=${title}&apikey=7a3ecfb6`)
  //     .then(response => response.json())
  //     .then(data =>
  //       this.setState({
  //         movies: data.Search.filter(movie => movie.Title === title)
  //       })
  //     )
  //     .catch(error => console.log(error));
  // };

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            {/* <Route
              exact
              path="/search"
              render={props => }
            /> */}
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <Search />
                  <Movies />
                </React.Fragment>
              )}
            />

            <Route exact path="/movieInfo" render={props => <MovieInfo />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
