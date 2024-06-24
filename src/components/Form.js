import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username: ''
      }
    }

    HandleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    
  render() {
    return (
      <form>
        <div>
            <label>Username:</label>
            <input type="text" name="username" value={this.state.username} onChange={this.HandleUsernameChange}/>
        </div>
      </form>
    )
  }
}

export default Form
