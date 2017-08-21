import React, { Component } from 'react'

export default class CreateItem extends Component {
  render() {
    return (
      <form>
        <input type='text' placholder='Add Item Here' />
        <button>Add Item</button>
      </form>
    )
  }
}
