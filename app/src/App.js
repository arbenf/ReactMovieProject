import React, { Component } from "react";
import Movies from "./components/movies/Movies";
import Search from "./components/search/Search";
import Header from "./components/header/Header";
import MovieInfo from "./components/pages/movieInfo/MovieInfo";
import ActorDetails from "./components/pages/actorDetails/actorDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import styles from "./app.module.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className={styles.App}>
          <Header />
          <Search />
          <Route exact path="/" component={Movies}/>
          <Route path="/movieInfo" component={MovieInfo}/>
          <Route path="/actorsInfo" component={ActorDetails}/>
        </div>
      </Router>
    );
  }
}

export default App;
