import _ from 'lodash';
import React, { Component } from 'react';
import ListHeader from './list-header';
import ItemListItem from './item-list-item';

export default class ItemList extends Component {
  renderItems() {
    const props = _.omit(this.props, 'items');

    return _.map(this.props.items, (item, index) => <ItemListItem key={index} {...item} {...props} />);
  }

  render() {
    console.log(this.props.items)
    return (
      <table className="table table-hover">
        <ListHeader />
        <tbody>
          {this.renderItems()}
        </tbody>
      </table>
    );
  }
}
