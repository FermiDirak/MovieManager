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

  onSearch(searchText) {
    console.log(searchText);
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
      }
    }

    let moviesList = this.state.movies.map(function(movie, index) {
      return <li key={index}>{movie.title}</li>
    });

    console.log(moviesList);

    return (
      <div style={styles.app}>
        <span style={styles.header}>Movies List</span>
        <Search onSearch={this.onSearch}/>
        { moviesList }
      </div>
    );
  }
}

ReactDOM.render( <MovieList/>, document.getElementById('app'));
