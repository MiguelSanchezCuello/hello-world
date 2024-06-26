import React, { Component } from 'react'
import LifecyleB from './LifecycleB'

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

    shouldComponentUpdate(){
      console.log('LifecycleA shouldComponentUpdate')
      return true
    }

    getSnapshotBeforeUpdate(){
      console.log('LifecycleA getSnapshotBeforeUpdate')
    }

    componentDidUpdate(){
      console.log('LifecycleA componentDidUpdate')
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
