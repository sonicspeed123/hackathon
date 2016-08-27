import React from 'react';
import $ from 'jquery';


class Topic extends React.Component {
constructor(props) {
  super(props);
  this.loadTopic = this.loadTopic.bind(this);
}

loadTopic() {
  $.ajax({
    url: '/Topic',
    type: 'GET',
    dataType: 'JSON'
  }).done(topic => {
    this.setState({
      topic
    });
  });
}

  render() {
      return (
        <div onClick= this.loadTopic>
        {this.props.name}
        </div>

      )
    }
  }

  export default Topic;
