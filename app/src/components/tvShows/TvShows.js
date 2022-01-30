import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TvShow from "../tvShow/tvShow";
import * as actions from "../../store/actions/tvShowActions";
import styles from "./tvShows.module.css";

class TvShows extends Component {
  componentDidMount() {
    this.props.onFetchTvShows();
  }

  render() {
    console.log("TvShows Render: ", this.props.tvShows);
    return (
      <div className={styles.tvShows}>
        {this.props.tvShows.map((tvShow) => (
          <TvShow tvShow={tvShow} key={tvShow.id} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tvShows: state.tvShows.tvShows,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchTvShows: () => dispatch(actions.fetchTvShows()),
  };
};

TvShows.propTypes = {
  tvShows: PropTypes.array.isRequired,
  onFetchTvShows: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TvShows);
