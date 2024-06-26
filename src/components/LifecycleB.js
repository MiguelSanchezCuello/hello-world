import React, { Component } from 'react'

class LifecyleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'React'
      }
      console.log('Lifecycle B Constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('Lifecycle B getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifecycleB componentDidMount')
    }

    shouldComponentUpdate(){
      console.log('LifecycleB shouldComponentUpdate')
      return true
    }

    getSnapshotBeforeUpdate(){
      console.log('LifecycleB getSnapshotBeforeUpdate')
      return null
    }

    componentDidUpdate(){
      console.log('LifecycleB componentDidUpdate')
    }
    
  render() {
    console.log('LifecyleB render')
    return (
      <div>
        Lifecycle B
      </div>
    )
  }
}

export default LifecyleB
