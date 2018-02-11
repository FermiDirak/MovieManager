import React from 'react';
import ReactDOM  from 'react-dom';
import PropTypes from 'prop-types';

var Movie = (props) => {
	let style = {
		margin: '8px',
		padding: '8px',
		width: '400px',
		borderRadius: '4px',
	}
	return (
		<span style={style}>
			{props.movie.title}
			<hr/>
		</span>
	);
};

Movie.propTypes = {
	movie: PropTypes.object,
}

export default Movie;