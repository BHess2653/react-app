import React, { Component } from 'react'

export default class CreateItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      error: null
    }
  }

  renderError() {
    if (!this.state.error) { return null }
    return <div style={{ color: 'red' }}>{this.state.error}</div>
  }

  render() {
    return (
      <form onSubmit={this.handleCreate.bind(this)}>
        <input type='text' placholder='Add Item Here' ref='createInput' />
        <button>Add Item</button>
        {this.renderError()}
      </form>
    )
  }

  handleCreate() {
    event.preventDefault()

    const createInput = this.refs.createInput
    const item = createInput.value
    const validateInput = this.validateInput(item)

    if (validateInput) {
      this.setState({ error: validateInput })
      return
    }

    this.setState({ error: null })
    this.props.createItem(item)
    this.refs.createInput.value = ''
  }

  validateInput(item) {
    if (!item) {
      return 'Please enter a item to add!'
    } else if (_.find(this.props.items, item => item.item === item)) {
      return 'Item already Exists!'
    } else {
      return null
    }
  }
}
