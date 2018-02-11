import React from 'react';
import ReactDOM  from 'react-dom';
import Search from './components/Search.jsx';

class MovieList extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [
        {title: 'Mean Girls'},
        {title: 'Hackers'},
        {title: 'The Grey'},
        {title: 'Sunshine'},
        {title: 'Ex Machina'},
      ],
    }

  }

  render() {
    var moviesList = this.state.movies.map(function(movie, index) {
      return <li key={index}>{movie.title}</li>
    });

    console.log(moviesList);

    return (
      <div>
        Movies List
        <Search/>
        { moviesList }
      </div>
    );
  }
}

ReactDOM.render( <MovieList/>, document.getElementById('app'));
