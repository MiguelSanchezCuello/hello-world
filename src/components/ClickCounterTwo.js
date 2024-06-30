import React, { Component } from 'react'

class ClickCounter2 extends Component {
   render() {
    const { count } = this.state
    return (
      <div>
        <button onClick={this.incrementCount}>Clicked {count} Times</button>
      </div>
    )
  }
}

export default ClickCounter2
