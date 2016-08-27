import React from 'react';
import Topic from './Topic';
import $ from 'jquery';


class Landing extends React.Component {
	constructor(props){
		super(props);
		this.state = {topics: []};
	}

	componentWillMount(){
		
	}

	render() {

		return (
			<div>
				<Topic />
			</div>
		)
	}
}

export default Landing;