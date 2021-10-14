import React, { Component } from "react";
import Movies from "./components/movies/Movies";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
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
          <Route exact path="/" component={Movies} />
          <Route path="/movieInfo" component={MovieInfo} />
          <Route path="/actorsInfo" component={ActorDetails} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
