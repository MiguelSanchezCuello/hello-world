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
      return null
    }

    componentDidUpdate(){
      console.log('LifecycleA componentDidUpdate')
    }
    
    changeState = () => {
      this.setState({
        name: 'ReactJS'
      })
    }

  render() {
    console.log('LifecyleA render')
    return (
      <div>
        <div>Lifecycle A</div>
        <button onClick={this.changeState}>Change State</button>
        <LifecyleB />
      </div>
    )
  }
}

export default LifecyleA
