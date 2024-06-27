import React, { Component } from 'react'
import RegularComp from './RegularComp';
import PureComp from './PureComp';

class ParentComp extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: 'Miguel'
    }
  }

  componentDidMount(){
    setInterval(() => {
        this.setState(
            {name: 'Miguel'}
        )
    }, 2000);
  }
  
    render() {
        console.log('--------------------------------ParentComponent')
    return (
      <div>
        Parent Component.
        <RegularComp name={this.state.name}></RegularComp>
        <PureComp name={this.state.name}></PureComp>
      </div>
    )
  }
}

export default ParentComp
