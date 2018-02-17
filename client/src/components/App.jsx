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
        {title: 'Mean Girls', description: 'Really cool movie', watched: false},
        {title: 'Hackers', description: 'haha thats a good movie', watched: false},
        {title: 'The Grey', description: 'Whats up grey', watched: false},
        {title: 'Sunshine', description: 'Boring snooze fest', watched: false},
        {title: 'Ex Machina', description: 'I kinda liked it', watched: false},
      ],
			filterText: '',
    }
  }

  componentDidMount() {
    this.onSearch('');
  }

	/** Called when user searches for a movie
	 *  @param {string} searchText Text to filter by */
  onSearch(searchText) {
		this.setState({filterText: searchText});
  }

	/** Called to add a movie to the movies list
	 * @param {string} movieTitle Title of movie to add to list */
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
        margin: 'auto',
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
          this.state.movies.length !== 0 ?
						<MoviesList movies={
							this.state.movies.filter((movie) => {
								return movie.title.toLowerCase().includes(this.state.filterText.toLowerCase());
							})
						}/>
            :
						<NoMovie/>
        }

        <AddMovie onSubmit={(movieTitle) => {this.onAdd(movieTitle)}}/>

      </div>
    );
  }
}

export default App;