import React from "react";
import { Component } from "react";

// This is a Class component unlike Greet which is a functiona Component.


class Welcome extends Component {
    render(){
        const {name, heroName} = this.props
        return <h1>Welcome {name} a.k.a. {heroName}</h1>;
    }
}

export default Welcome;
