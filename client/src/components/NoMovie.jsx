import React from 'react';
import ReactDOM  from 'react-dom';
import PropTypes from 'prop-types';

var NoMovie = () => {
	let style = {
		width: '100%',
		textAlign: 'center',
		color: 'grey',
	}
	return (
		<span style={style}>
			No movies
		</span>
	);
};

export default NoMovie;