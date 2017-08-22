import React, { Component } from 'react'

export default class ItemList extends Component {
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
    const job = createInput.value
    const validateInput = this.validateInput(job)

    if (validateInput) {
      this.setState({ error: validateInput })
      return
    }

    this.setState({ error: null })
    this.props.createJob(job)
    this.refs.createInput.value = ''
  }

  validateInput(job) {
    if (!job) {
      return 'Please enter a job to add!'
    } else if (_.find(this.props.items, item => item.job === job)) {
      return 'Job already Exists!'
    } else {
      return null
    }
  }
}