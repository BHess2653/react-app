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

    if (this.state.isEditing) {
      return (
        <td>
          <form onSubmit={this.onSaveClick.bind(this)}>
            <input type='text' defaultValue={item} ref='editInput' />
          </form>
        </td>
      )
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
          <button onClick={this.onSaveClick.bind(this)}>Save</button>
          <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
        </td>
      )
    }
    return (
      <td>
        <button onClick={this.onEditClick.bind(this)}>Edit</button>
        <button onClick={this.props.deleteItem.bind(this, this.props.item)}>Delete</button>
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
  // Save Btn
  onSaveClick(event) {
    event.preventDefault()
    const oldItem = this.props.item
    const newItem = this.refs.editInput.value
    this.props.saveItem(oldItem, newItem)
    this.setState({ isEditing: false })
  }
}
