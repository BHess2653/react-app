import React, { Component } from 'react'

export default class ItemListItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isEditing: false
    }
  }

  // Change Color on Click
  renderItemSection() {
    const { item, isCompleted } = this.props

    const itemStyle = {
      color: isCompleted ? 'green' : 'red',
      curser: 'pointer'
    }

    return(
      <td onClick={this.toggleItem.bind(this, item)} style={itemStyle}>{item}</td>
    )
  }

  // Render the buttons
  renderActionSection() {
    if (this.isEditing) {
      return (
        <td>
          <button>Save</button>
          <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
        </td>
      )
    }
    return (
      <td>
        <button onClick={this.onEditClick.bind(this)}>Edit</button>
        <button>Delete</button>
      </td>
    )
  }

  render() {
    return (
      <tr>
        {this.renderItemSection()}
        {this.renderActionSection()}
      </tr>
    )
  }
  // Edit Btn
  onEditClick() {
    this.setState({ isEditing: true })
  }
  // Cancel Btn
  onCancelClick() {
    this.setState({ isEditing: true })
  }
}
