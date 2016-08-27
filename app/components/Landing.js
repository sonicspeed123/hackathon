import React from 'react';
import Topic from './Topic';
import $ from 'jquery';


class Landing extends React.Component {
	constructor(props){
		super(props);
		this.state = { topics: [{
			items: ['applebees', 'panda express'],
			name: 'restaurantes'
			},
			{
			items: ['yoga', 'crossfit'],
			name: 'fitness'
			}
			]
		}
	}

	render() {
		let topics = this.state.topics.map( topic => {
			return(<div className='col s4 card'><div className='card-content'><Topic {...topic} /></div></div>)
		})
		return (
			<div className='row'>
				{topics}
			</div>
		)
	}
}

export default Landing;
