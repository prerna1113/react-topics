import React from 'react'

function Text({data}) {
  return (
    <div style={{width:"300px",boxShadow:"0 0 10px blue",padding:"20px",margin:"auto"}}>
      <h1>Text Component</h1>
      <p>{data}</p>
    </div>
  )
}

export default Text