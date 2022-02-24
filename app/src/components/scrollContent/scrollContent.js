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
        movies={props.upComingMovies}
        title={"Upcoming"}
        typeOfContent={Movie}
      />
      <ScrollMovies
        data={props.onGetNowPlayingMovies}
        movies={props.nowPlayingMovies}
        title={"Now Playing"}
        typeOfContent={Movie}
      />
      <ScrollMovies
        data={props.onGetTvShowsOnTheAir}
        movies={props.tvShowsOnTheAir}
        title={"Tv shows on the air"}
        typeOfContent={TvShow}
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
