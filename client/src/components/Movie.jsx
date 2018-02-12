import React from 'react';
import ReactDOM  from 'react-dom';
import PropTypes from 'prop-types';

import MovieDetails from './MovieDetails.jsx';

class Movie extends React.Component {
	constructor() {
		super();

		this.state = {
			toggled: false,
		};
	}

	onClick() {
		this.setState({toggled: !this.state.toggled});
	}

	render() {
		let style = {
			margin: '8px',
			padding: '8px',
			width: '400px',
			borderRadius: '4px',
		}

		return (
			<span style={style}
				onClick={() => {this.onClick()}}
			>
				{this.props.movie.title}
				{
					this.state.toggled && this.props.movie.description
						? <MovieDetails movie={this.props.movie}/>
						: undefined
				}
				<hr/>
			</span>
		);
	}
};

Movie.propTypes = {
	movie: PropTypes.object,
}

export default Movie;