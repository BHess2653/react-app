import React, { Component } from 'react'
import CreateItem from './create-item'
import ItemList from './item-list'

const items = [
  {
    task: 'Create Lava Chicken',
    isCompleted: true
  },
  {
    task: 'Create Water Chicken'
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
        <CreateItem />
        <ItemList items={this.state.items}/>
      </div>
    )
  }
}
