import React, { Component } from 'react'

class LifecyleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'React'
      }
      console.log('Lifecycle A Constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('Lifecycle A getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifecycleA componentDidMount')
    }
    
  render() {
    return (
      <div>
        console.log('LifecyleA render')
        Lifecycle A
      </div>
    )
  }
}

export default LifecyleA
