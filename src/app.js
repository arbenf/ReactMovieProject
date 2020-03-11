
import React, { Component } from "react";
import Movies from "./components/movies/Movies";
import Search from "./components/search/Search";
import Header from "./components/header/Header";
import MovieInfo from "./components/pages/movieInfo/MovieInfo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
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

            <Route
              exact
              path="/movieInfo"
              render={props => (
                <div className="movieInfo">
                  <MovieInfo />
                </div>
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;


import React, { Component } from "react";
import Movies from "./components/movies/Movies";
import Search from "./components/search/Search";
import Header from "./components/header/Header";
import MovieInfo from "./components/pages/movieInfo/MovieInfo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styles from "./app.module.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className={styles.App}>
          <Header />
          <Switch>
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

            <Route
              exact
              path="/movieInfo"
              render={props => (
                <div className="movieInfo">
                  <MovieInfo />
                </div>
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

