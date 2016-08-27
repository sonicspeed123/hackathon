import React from 'react';

class Items extends React.Component{
  contructor(props){
    super(props);
    this.state = { item: [] }:
    addComment = this.addComment.bind(this);
  }
  componentWillMount
    $.ajax({
      url: '/items',
      type: 'GET'
      dataType: 'JSON'
      data: {
        topicId: this.props._id,
        name: this.props.name,
        picture: this.props.picture,
        description: this.props.description,
        comments: this.prop.comments
      }
    }).done( item => {
      this.setState{ item }
    });

  addComment() {
    

  }
  render() {
    return
  }
}
