import React from 'react';
import ReactDOM  from 'react-dom';

import MoviesList from './components/MoviesList.jsx';
import Search from './components/Search.jsx';
import NoMovie from './components/NoMovie.jsx';

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
      selectedMovies: [
      ],
    }
  }

  componentDidMount() {
    this.onSearch('');
  }

  onSearch(searchText) {
    var selectedMovies = this.state.movies.filter(function(movie) {
      return movie.title.toLowerCase().includes(searchText);
    });

    this.setState({selectedMovies: selectedMovies});
  }

  render() {
    let styles = {
      app: {
        display: 'flex',
        flexDirection: 'column',
        width: '600px',
        height: '500px',
        margin: 'auto',
        marginTop: '75px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
      },

      header: {
        background: '#E4D6A7',
        textAlign: 'center',
        padding: '8px',
      },
    }

    return (
      <div style={styles.app}>
        <span style={styles.header}>Movies List</span>
        <Search onSearch={(searchText) => {this.onSearch(searchText)}}/>
        {
          this.state.selectedMovies.length !== 0
            ? <MoviesList movies={this.state.selectedMovies}/>
            : <NoMovie/>
        }
      </div>
    );
  }
}

ReactDOM.render( <MovieList/>, document.getElementById('app'));
