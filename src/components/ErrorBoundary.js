// If we comment the Error boundary element which is wrapping the heroes in the App.js component then nothing
// will be displayed  (something went wrong text) and the error was not properly handled
import React, { Component } from 'react'

class ErrorBoundary extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
         hasError: false
      }
    }
    
    static getDerivedStateFromError(error){
        return { hasError: true };
    }

  render() {
    if (this.state.hasError) {
        return <h1>Something went wrong</h1>;
    }
    return this.props.children;
  }
  
}

export default ErrorBoundary
