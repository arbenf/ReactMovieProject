import React, { Component } from "react";
import Loading from "../../../components/loading/Loading";
import PropTypes from "prop-types";
import { movieInfo } from "../../../actions/movieActions";

import { connect } from "react-redux";

import "./movieInfo.css";

class MovieInfo extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    //Wait until data is fetched
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  }

  render() {
    console.log("movieInfo render", this.props.movie.Title);

    const { Poster, Title, Plot } = this.props.movie;

    if (this.state.loading) {
      return <Loading />;
    }
    // console.log(this.props.movie.Title);
    return (
      <div>
        <img src={Poster} width="400" height="550" alt="moviePoster" />
        <p>{Title}</p>
        <p>{Plot}</p>
      </div>
    );
  }
}

MovieInfo.propTypes = {
  movieInfo: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  movie: state.movies.item
});

export default connect(
  mapStateToProps,
  { movieInfo }
)(MovieInfo);
