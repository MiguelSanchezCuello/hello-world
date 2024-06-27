import React, { PureComponent } from 'react'
// Look at video 26 for the theory behind Pure Components.
// A pure component implemnents shouldComponentUpdate with a shallow prop and state comparison.
// If the props or state change, the component will re-render. If not, it will not
// This is useful for performance optimization.


// Pure Components are like normal components, but they have a shouldComponentUpdate method that 
// is called before the render method is called. 
// This method is called to determine if the component should be re-rendered or not. 
// If the shouldComponentUpdate method returns false, then the component will not be
// re-rendered. This can be useful for performance reasons, as it can prevent unnecessary re-renders.

// Pure Components are also useful for components that are not stateful, as they can be used to 
// prevent unnecessary re-renders of the component. This can be useful for components that are
// used to display data that is not changing, as it can prevent unnecessary re-renders of
// the component.

class PureComp extends PureComponent {
  render() {
    console.log('PureComp render')
    return (
      <div>
        Pure Component. {this.props.name}
      </div>
    )
  }
}

export default PureComp

