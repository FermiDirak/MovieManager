import React from 'react';
import ReactDOM  from 'react-dom';

class Search extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<input type='text' placeholder='search..'/>
				<button> Search </button>
			</div>
		);
	}
}

export default Search;