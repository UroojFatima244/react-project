import React from 'react'

function Style() {
  const About={
backgroundColor:'pink',
borderradius:'10px',
  }
  const paragraph={
  textColor:"blue",
  }

  const button={
    textColor:"red",
    borderRadius:"10px"
  }
  return (
    <>
    <div>
      <h1 style={About}>About US Page</h1>
      <h1 style={paragraph}> urooj</h1>
<h1 style={button}>button</h1>
        
      
    </div>
    </>
  )
}

export default Style

