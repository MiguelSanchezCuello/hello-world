import React from "react";

const Hello = () => {
    // This is the JSX Version
    // return (
    //  <div>
    //     <h1>Hello Vishwas</h1>
    //  </div>
    // )

    // This is the Component without using JSX
    // The createElement method receives 3 parameters
    // 1- The element to create
    // 2- The props, we can use an object like {id:'hello', className:'dummyClass}
    // 3- The string inside the element
    return React.createElement(
        'div', 
        null, 
        React.createElement('h1', null, "Hello H1")
    );

    // These examples shows ho JSX makes it easier and more elegant(simpler).
}

export default Hello;