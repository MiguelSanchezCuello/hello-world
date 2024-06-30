import React, { Component } from 'react'

class HoverCounterTwo extends Component {
  render() {
    const { count } = this.state
    return (
      <div>
        <h2 onMouseOver={this.incrementCount}>Hover {count} Times</h2>
      </div>
    )
  }
}

export default HoverCounterTwo
