import React, { Component, PureComponent } from 'react'
import RegularComp from './RegularComp';
import PureComp from './PureComp';
import MemoComp from './MemoComp';

class ParentComp extends PureComponent {
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
        <MemoComp name={this.state.name} />
        {/* <RegularComp name={this.state.name}></RegularComp> */}
        {/* <PureComp name={this.state.name}></PureComp> */}
      </div>
    )
  }
}

export default ParentComp
