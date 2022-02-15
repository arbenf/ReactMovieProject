import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as actions from "../../store/actions/movieActions";
import ScrollMovies from "./scrollMovies/scrollMovies";

const scrollContent = (props) => {
  return (
    <div>
      <ScrollMovies
        data={props.onGetUpcomingMovies}
        movies={props.upComingMovies}
        title={"Upcoming"}
      />
      <ScrollMovies
        data={props.onGetNowPlayingMovies}
        movies={props.nowPlayingMovies}
        title={"Now Playing"}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    upComingMovies: state.movies.upComingMovies,
    nowPlayingMovies: state.movies.nowPlayingMovies,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetUpcomingMovies: () => dispatch(actions.getUpcomingMovies()),
    onGetNowPlayingMovies: () => dispatch(actions.getNowPlayingMovies()),
  };
};

scrollContent.propTypes = {
  upComingMovies: PropTypes.object.isRequired,
  nowPlayingMovies: PropTypes.object.isRequired,
  onGetUpcomingMovies: PropTypes.func.isRequired,
  onGetNowPlayingMovies: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(scrollContent);
