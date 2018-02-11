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
	}

	onSubmit() {
		this.props.onSearch(this.state.inputText);
	}

	render() {
		return (
			<div>
				<input type='text'
					placeholder='search..'
					onChange={(event) => {this.onChangeText(event)}}
				/>
				<button onClick={() => {this.onSubmit()}}> Search </button>
			</div>
		);
	}
}

Search.propTypes = {
	onSearch: PropTypes.func,
}

export default Search;