import React, { Component } from 'react'

export default class CreateItem extends Component {
  render() {
    return (
      <form onSubmit={this.handleCreate.bind(this)}>
        <input type='text' placholder='Add Item Here' ref='createInput' />
        <button>Add Item</button>
      </form>
    )
  }

  handleCreate() {
    event.preventDefault()

    this.props.createItem(this.refs.createInput.value)
    this.refs.createInput.value = ''
  }
}
