import React from 'react';
import Items from '../components/Items';

class ItemPage extends React.Component {
  render() {
    return (
      <div>
       <Items itemId={this.props.id} />
      </div>
    )
  }
}

export default Item;
