import React, { Component } from 'react'
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
  render() {
    return (
      <div>
        <h1>React App</h1>
      </div>
    )
  }
}
