import React, { Component } from 'react';

export default class ListHeader extends Component {
  render() {
    return (
      <thead>
        <tr>
          <th>Goals</th>
          <th>Edit/Delete</th>
        </tr>
      </thead>
    )
  }
}
