import React, {Component} from 'react';
import Movies from './components/Movies';
class App extends Component {
  state = {
    movies: [
      // {Poster: "https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"},
      // {Poster: "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},
      // // {Poster: "https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg"}
    ]
  }

  componentDidMount(){
    fetch("https://www.omdbapi.com/?s=batman&apikey=7a3ecfb6")
    .then(response => response.json())
    .then(data => this.setState({movies: data.Search}))
    .catch(error => console.log(error))
  }

  render(){
    return <Movies movies={this.state.movies}/>    
  }
}

export default App;