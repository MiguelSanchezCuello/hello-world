import React, { Component } from 'react'

// In this video No. 14 he explains 4 approaches on how to bind event handlers in React
// 1- Binding in the render method (not sugggested due to performance implication)
// 2- Binding with arrow function in the render method (easiest way to pass parameters)
// 3- Binding in the class's constructor (suggested by react documentation by the time of the video 2017)
// 4- Binding with a class property as an arrow function. (this was new back,2017, then but could be the one being used now)
class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello'
      }

    //   this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler(){
    //     this.setState({
    //         message: 'Goodbye!'
    //     })
    //     console.log(this)
    // }

    // fourth approach
    clickHandler = () => {
        this.setState({
            message : 'Goodbye!'
        })
    }
    
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* // First approach for binding */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */} 
        {/* // Second approach using arrow functions */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}
        
        {/* // The third approach is to bind in the class construction. */}
        {/* <button onClick={this.clickHandler}>Click</button> */}

        {/* // The fourth approach defines a clickHandler with an arrow function. */}
        <button onClick={this.clickHandler}>Click</button>

      </div>
    )
  }
}

export default EventBind
