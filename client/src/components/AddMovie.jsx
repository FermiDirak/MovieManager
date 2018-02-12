import React from 'react';
import ReactDOM  from 'react-dom';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
	constructor() {
		super();
		this.state = {
			inputText: '',
		};
	}

	onChangeText(event) {
		this.setState({inputText: event.target.value});
	}

	onSubmit() {
		this.props.onSubmit(this.state.inputText);
	}

	render() {
		let styles = {
			searchBox: {
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'center',
				alignSelf: 'flex-bottom',
				background: '#E4D6A7',
				padding: '16px',
			},

			input: {
				padding: '6px',
				fontSize: '10pt',
			},

			button: {
				marginLeft: '8px',
				border: '1px solid #ccc',
			},
		};

		return (
			<div style={styles.searchBox}>
				<input type='text'
					placeholder='movie..'
					style={styles.input}
					onChange={(event) => {this.onChangeText(event)}}
				/>
				<button
					style={styles.button}
					onClick={() => {this.onSubmit()}}
				>
					Add Movie
				</button>
			</div>
		);
	}
}

AddMovie.PropTypes = {
	onSubmit: PropTypes.func,
}

export default AddMovie;