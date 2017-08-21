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
        <CreateItem createItem={this.createItem.bind(this)} />
        <ItemList items={this.state.items} toggleItem={this.toggleItem.bind(this)} />
      </div>
    )
  }

  toggleItem(item) {
    const foundItem = _.find(this.state.items, item => item.item === item)
    foundItem.isCompleted = !foundItem.isCompleted
    this.setState({ items: this.state.items })
  }

  createItem(item) {
    this.state.items.push({
      item,
      isCompleted: false
    })
    this.setState({ items: this.state.items })
  }
}
