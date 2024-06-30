// Keep in mind that there is a nother way to use the Render Props Pattern
// by just passing the function as a prop and using the children, for instance:
// <CounterWithPropsPattern> 
//   {(count, incrementCount) => (
//     <ClickCounterTwo count={count} incrementCount={incrementCount} />
//   )}
// </CounterWithPropsPattern> 
//
// Instead of using the render property and passing the component as a property to render.
// and instead of using this.props.render(this.state.count, this.incrementCount) in the 
// CounterWithPropsPattern component we use this.props.children(this.state.count, this.incrementCount)
// WE ARE STILL USING A PROP WHICH VALUE IS A FUNCTION TO RENDER UI AND SHARE FUNCTIONALITY.

import React, { Component } from 'react'

class CounterWithPropsPattern extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           count: 0
        }
      }
    
      incrementCount = () => {
        this.setState(prevState => {
            return {count: prevState.count + 1}
        })
      }


  render() {
    return (
      <div>
        {this.props.render(this.state.count, this.incrementCount)}
      </div>
    )
  }
}

export default CounterWithPropsPattern
