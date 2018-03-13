import React, { Component } from 'react';
import CreateJob from './create-item';
import ItemList from './item-list';

const items = [
  {
    job: 'Start Sky Factory 3 Map',
    isCompleted: true,
  },
  {
    job: 'Build Mob Farm',
    isCompleted: true,
  },
  {
    job: 'Build Chicken Farm',
    isCompleted: false,
  },
];

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items,
    };
  }

  toggleJob(job) {
    const foundItem = _.find(this.state.items, item => item.job === job);
    foundItem.isCompleted = !foundItem.isCompleted;
    this.setState({ items: this.state.items });
  }

  createJob(job) {
    this.state.items.push({
      job,
      isCompleted: false,
    });
    this.setState({ items: this.state.items });
  }

  saveJob(oldJob, newJob) {
    const foundItem = _.find(this.state.items, item => item.job === oldJob);
    foundItem.job = newJob;
    this.setState({ items: this.state.items });
  }

  deleteJob(jobToDelete) {
    _.remove(this.state.items, item => item.job === jobToDelete);
    this.setState({ items: this.state.items });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <h1>Sky Factory 3 Todo List</h1>
            <CreateJob
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
        </div>
      </div>
    );
  }
}
