import _ from 'lodash'
import React, { Component } from 'react'
import ListHeader from './list-header'

export default class ItemList extends Component {
  renderItems() {
    return _.map(this.props.items, (item, index) item => <ItemListItem key={index} {..item} />)
  }

  render() {
    console.log(this.props.items)
    return (
      <table>
        <ListHeader />
        <tr>
          {this.renderItems()}
        </tr>
      </table>
    )
  }
}
