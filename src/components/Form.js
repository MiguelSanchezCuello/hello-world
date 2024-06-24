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
         comments: '',
         topic: 'react'
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

    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
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
        <div>
            <label>Topic</label>
            <select value={this.state.topic} 
                onChange={this.handleTopicChange}>
                    <option value="react">React</option>
                    <option value="angular">Angular</option>
                    <option value="vue">Vue</option>
            </select>
        </div>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default Form
