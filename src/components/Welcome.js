import React from "react";
import { Component } from "react";

// This is a Class component unlike Greet which is a functiona Component.


class Welcome extends Component {
    render(){
        return <h1>Welcome {this.props.name} a.k.a. {this.props.heroName}</h1>;
    }
}

export default Welcome;
