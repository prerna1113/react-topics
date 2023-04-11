import React from 'react'

function Text({data}) {
  return (
    <div style={{width:"300px",boxShadow:"0 0 10px red",margin:"70px auto"}}>
        <h2>Text Component</h2>

        <p>{data}</p>
    </div>
  )
}

export default Text