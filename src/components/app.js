import React, { Component } from 'react'
import CreateItem from './create-item'
import ItemList from './item-list'

const items = [
  {
    job: 'Create Ender Pearl Chicken',
    isCompleted: true
  },
  {
    job: 'Create Iron Chicken'
    isCompleted: false
  }
]

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items
    }
  }

  render() {
    return (
      <div>
        <h1>React App</h1>
        <CreateItem
        items={this.state.items}
        createJob={this.createJob.bind(this)}
        />
        <ItemList
        items={this.state.items}
        toggleJob={this.toggleJob.bind(this)}
        saveJob={this.saveJob.bind(this)}
        deleteJob={this.deleteJob.bind(this)}
        />
      </div>
    )
  }

  toggleJob(job) {
    const foundItem = _.find(this.state.items, item => item.job === job)
    foundItem.isCompleted = !foundItem.isCompleted
    this.setState({ items: this.state.items })
  }

  createJob(job) {
    this.state.items.push({
      job,
      isCompleted: false
    })
    this.setState({ items: this.state.items })
  }

  saveJob(oldJob, newJob) {
    const foundItem = _.find(this.state.items, item => item.job === oldJob)
    foundItem.job = newJob
    this.setState({ items: this.state.items })
  }

  deleteJob(jobToDelete) {
    _.remove(this.state.items, item => item.job === jobToDelete)
    this.setState({ items: this.state.items })
  }
}
