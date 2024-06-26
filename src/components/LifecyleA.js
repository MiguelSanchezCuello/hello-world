import React, { Component } from 'react'
import LifecyleB from './LifcecycleB'

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
    console.log('LifecyleA render')
    return (
      <div>
        Lifecycle A
        <LifecyleB />
      </div>
    )
  }
}

export default LifecyleA
