import React, { Component } from "react";
import Movies from "./components/movies/Movies";
import TvShows from "./components/tvShows/TvShows";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MovieInfo from "./components/pages/movieInfo/MovieInfo";
import TvShowInfo from "./components/pages/tvShowInfo/tvShowInfo";
import ActorDetails from "./components/pages/actorDetails/actorDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import styles from "./app.module.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className={styles.App}>
          <Header />
          <Route exact path="/movies" component={Movies} />
          <Route path="/tvShows" component={TvShows} />
          <Route path="/movieInfo" component={MovieInfo} />
          <Route path="/tvShowInfo" component={TvShowInfo} />
          <Route path="/actorsInfo" component={ActorDetails} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
