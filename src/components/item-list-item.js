import React, { Component } from 'react'

export default class ItemListItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isEditing: false
    }
  }

  // Change Color on Click
  renderJobSection() {
    const { job, isCompleted } = this.props

    const jobStyle = {
      color: isCompleted ? 'green' : 'red',
      curser: 'pointer'
    }

    if (this.state.isEditing) {
      return (
        <td>
          <form onSubmit={this.onSaveClick.bind(this)}>
            <input type='text' defaultValue={job} ref='editInput' />
          </form>
        </td>
      )
    }

    return(
      <td onClick={this.toggleJob.bind(this, job)} style={jobStyle}>Job}</td>
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
        <button onClick={this.props.deleteJob.bind(this, this.props.job)}>Delete</button>
      </td>
    )
  }

  render() {
    return (
      <tr>
        {this.renderJobSection()}
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
    const oldJob = this.props.job
    const newJob = this.refs.editInput.value
    this.props.saveJob(oldJob, newJob)
    this.setState({ isEditing: false })
  }
}
