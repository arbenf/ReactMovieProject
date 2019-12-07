import React, {Component} from 'react';


class Movie extends Component {

  render() {
    const {Poster, Title, Year} = this.props.movie;
    return  <div className="movie">
              <a href="default.asp">
                <img  src={Poster} width="400" height="550" alt="moviePoster"></img>
                <p>{Title}</p>
              </a>
              <h4>Release date: {Year}</h4>
            </div>  
               
  }
}

export default Movie;