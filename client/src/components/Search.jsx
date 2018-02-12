import React from 'react';
import ReactDOM  from 'react-dom';
import PropTypes from 'prop-types';

class Search extends React.Component {
	constructor() {
		super();
		this.state = {
			inputText: '',
		};
	}

	onChangeText(event) {
		this.setState({inputText: event.target.value});
		this.props.onSearch(event.target.value);
	}

	onSubmit() {
		this.props.onSearch(this.state.inputText);
	}

	render() {
		let styles = {
			searchBox: {
				display: 'flex',
				flexDirection: 'row',
				margin: '24px',
				marginLeft: '24px',
			},

			input: {
				padding: '6px',
				fontSize: '10pt',
			},

			button: {
				marginLeft: '8px',
				border: '1px solid #ccc',
			},


		}

		return (
			<div style={styles.searchBox}>
				<input type='text'
					placeholder='search..'
					style={styles.input}
					onChange={(event) => {this.onChangeText(event)}}
				/>
				<button
					style={styles.button}
					onClick={() => {this.onSubmit()}}
				>
					Search
				</button>
			</div>
		);
	}
}

Search.propTypes = {
	onSearch: PropTypes.func //takes in the text in the input field,
}

export default Search;