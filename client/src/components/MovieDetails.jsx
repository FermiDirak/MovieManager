import React from 'react';
import ReactDOM  from 'react-dom';
import PropTypes from 'prop-types';

var MovieDetails = (props) => {
	var { movie } = props;

	let style = {
		paddingLeft: '8px',
		fontSize: '8pt',
	};

	return (
		<div style={style}>
			{movie.description}
		</div>
	);
};

MovieDetails.propTypes = {
	movie: PropTypes.object
};

export default MovieDetails;