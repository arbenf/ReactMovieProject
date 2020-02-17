import React, { Component } from "react";
import PropTypes from "prop-types";
import { movieInfo } from "../../actions/movieActions";

import { connect } from "react-redux";

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

    if (this.state.loading) {
      return (

        <div className="lds-ring">

        <div className="lds-ring">

          <div />
          <div />
          <div />
          <div />
        </div>
      );
    }
    // console.log(this.props.movie.Title);
    return (
      <div>
        <img
          src={this.props.movie.Poster}
          width="400"
          height="550"
          alt="moviePoster"
        />
        <p>{this.props.movie.Title}</p>
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
