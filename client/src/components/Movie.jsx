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
		let styles = {
			container: {
				margin: '8px',
				padding: '8px',
				width: '400px',
				borderRadius: '4px',
			},
			briefInfo: {
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-between',
			},
			briefText: {
				cursor: 'pointer',
			},
			watchedButton: {
				color: 'grey',
				cursor: 'pointer',
			}
		}

		return (
			<span style={styles.container}>
				<div style={styles.briefInfo}>
					<p style={styles.briefText}
						onClick={() => {this.onClick()}}
					>
						{this.props.movie.title}
					</p>

					<p style={styles.watchedButton}> watched? </p>
				</div>
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