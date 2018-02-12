import React from 'react';
import ReactDOM  from 'react-dom';
import PropTypes from 'prop-types';

var NoMovie = () => {
	let style = {
		width: '100%',
		textAlign: 'center',
		color: 'grey',
		margin: '16px',
	}
	return (
		<span style={style}>
			No movies
		</span>
	);
};

export default NoMovie;