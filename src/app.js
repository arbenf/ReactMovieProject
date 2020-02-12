import React, { Component } from "react";
import Movies from "./components/Movies";
import Search from "./components/Search";
import Header from "./components/Header";
import MovieInfo from "./components/pages/MovieInfo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
              /*render={props => <MovieInfo />}*/ component={MovieInfo}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
