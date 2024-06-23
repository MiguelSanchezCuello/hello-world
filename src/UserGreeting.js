import React, { Component } from 'react'

class UserGreeting extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        isLoggedIn: false
     }
   }
   
  
    render() {
        // if else approach
        // if (this.state.isLoggedIn) {
        //     return <div>Welcome Coto</div>
        // } else {
        //     return <div>Welcome Guest</div>
        // }

        // Element variable approach
        let message
        if (this.state.isLoggedIn){
            message = <div>Welcome Coto</div>
        } else {
            message = <div>Welcome Guest</div>
        }

        return <div>{message}</div>


        // Approach with ternary operator.




        
        // return (
        //     <div>
        //         <div>Welcome React</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting
