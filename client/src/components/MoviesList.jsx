import React from 'react';
import ReactDOM  from 'react-dom';
import PropTypes from 'prop-types';

import Movie from './Movie.jsx';


var MovieList = (props) => {
	var { movies } = props;

	let style = {
		display: 'flex',
		flexDirection: 'column',
		height: '100%',
		overflow: 'scroll',
	}

	let moviesList = movies.map(function(movie, index) {
		return <Movie key={index}
			movie={movie}
		/>
	});

	return (
		<div style={style}>
		{
			moviesList
		}
		</div>
	);
};

MovieList.propTypes = {
	movies: PropTypes.array,
};

export default MovieList;