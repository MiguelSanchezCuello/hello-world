import React, { Component } from 'react'

// There are three simple steps to use a Controlled Component, in this case for a Form.
// 1 - Add the element HTML
// 2 - Assign the component state to the element value
// 3 - Assign an onChangeHandler taht updates the state.

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         comments: ''
      }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }
    
  render() {
    return (
      <form>
        <div>
            <label>Username:</label>
            <input type="text" name="username" 
                value={this.state.username} 
                onChange={this.handleUsernameChange}/>
        </div>
        <div>
            <label>Comments</label>
            <textarea value={this.state.comments} 
                onChange={this.handleCommentsChange}>

            </textarea>
        </div>
      </form>
    )
  }
}

export default Form
