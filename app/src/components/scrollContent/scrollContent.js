import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as movieActions from "../../store/actions/movieActions";
import * as tvShowActions from "../../store/actions/tvShowActions";
import ScrollMovies from "./scrollMovies/scrollMovies";
import Movie from "../movie/Movie";
import TvShow from "../tvShow/tvShow";

const scrollContent = (props) => {
  return (
    <React.Fragment>
      <ScrollMovies
        data={props.onGetUpcomingMovies}
        typeOfContent={props.upComingMovies}
        title={"Upcoming"}
        typeOfContainer={Movie}
      />
      <ScrollMovies
        data={props.onGetNowPlayingMovies}
        typeOfContent={props.nowPlayingMovies}
        title={"Now Playing"}
        typeOfContainer={Movie}
      />
      <ScrollMovies
        data={props.onGetTvShowsOnTheAir}
        typeOfContent={props.tvShowsOnTheAir}
        title={"Tv shows on the air"}
        typeOfContainer={TvShow}
      />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    upComingMovies: state.movies.upComingMovies,
    nowPlayingMovies: state.movies.nowPlayingMovies,
    tvShowsOnTheAir: state.tvShows.tvShowsOnTheAir,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetUpcomingMovies: () => dispatch(movieActions.getUpcomingMovies()),
    onGetNowPlayingMovies: () => dispatch(movieActions.getNowPlayingMovies()),
    onGetTvShowsOnTheAir: () => dispatch(tvShowActions.getTvShowsOnTheAir()),
  };
};

scrollContent.propTypes = {
  upComingMovies: PropTypes.object.isRequired,
  nowPlayingMovies: PropTypes.object.isRequired,
  tvShowsOnTheAir: PropTypes.object.isRequired,
  onGetUpcomingMovies: PropTypes.func.isRequired,
  onGetNowPlayingMovies: PropTypes.func.isRequired,
  onGetTvShowsOnTheAir: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(scrollContent);
