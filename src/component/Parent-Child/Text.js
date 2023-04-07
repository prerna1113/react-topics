import React from 'react'

function Text({data}) {
  return (
    <div style={{boxShadow:"0 0 10px green",height:"150px"}}>
        <h2>Text Component</h2>
        <p>{data}</p>
    </div>
  )
}

export default Text