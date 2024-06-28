import React from 'react'
import ReactDOM  from 'react-dom'

function PortalDemo() {
  return ReactDOM.createPortal(
    <h1>
      Portals Demo
    </h1>, 
    document.getElementById("portal-root")
  )
}

export default PortalDemo

// Copied the two examples from the video 31
// https://codesandbox.io/s/00254q4n6p
// https://codepen.io/gaearon/pen/jGBWpE