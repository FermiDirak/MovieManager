import React from 'react';

import Search from './Search.jsx';
import AddMovie from './AddMovie.jsx';
import MoviesList from './MoviesList.jsx';
import NoMovie from './NoMovie.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [
        {title: 'Mean Girls', description: 'Really cool movie'},
        {title: 'Hackers', description: 'haha thats a good movie'},
        {title: 'The Grey', description: 'Whats up grey'},
        {title: 'Sunshine', description: 'Boring snooze fest'},
        {title: 'Ex Machina', description: 'I kinda liked it'},
      ],
      selectedMovies: [
        /* filled in by search */
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

  onAdd(movieTitle) {
    var movies = this.state.movies;
    movies.push({title: movieTitle, description: 'no desc'});

    this.setState({movies: movies});

    this.onSearch('');
  }

  render() {
    let styles = {
      app: {
        display: 'flex',
        flexDirection: 'column',
        width: '600px',
        // margin: '75px auto',
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

        <AddMovie onSubmit={(movieTitle) => {this.onAdd(movieTitle)}}/>

      </div>
    );
  }
}

export default App;