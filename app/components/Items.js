import React from 'react';

class Items extends React.Component{
  contructor(props){
    super(props);
    this.state = { item: [] }:
    this.addComment = this.addComment.bind(this);
    this.loadItem = this.loadItem.bind(this);
  }
  componentWillMount
    $.ajax({
      url: '/Items',
      type: 'GET'
      dataType: 'JSON'
      data: { // should this just be data for item? I still need to GET all of the following information
        topicId: this.props._id,
        itemId: this.props._id, //not sure which id to reference -- see models
        name: this.props.name,
        picture: this.props.picture,
        description: this.props.description,
        comments: this.prop.comments
      }
    }).done( item => {
      this.setState{ item }
    });

  loadItem(id) {
    let item = this.state.items.map( item => {
      if (item._id === id) {
      return {
          ...item,
          description, name
            }
          }
  }


  addComment() {


  }
  render() {
    return
  }
}
