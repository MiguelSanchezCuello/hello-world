import React from 'react'

// With the Inline styling we create an object that will have the styles and we apply it to the element inLine.

const heading = {
    fontSize: '72px',
    color: 'blue'
}

function Inline() {
  return (
    <div>
      <h1 style={heading}>Inline</h1>
      <h1 className='error'>Error</h1>
    </div>
  )
}

export default Inline
