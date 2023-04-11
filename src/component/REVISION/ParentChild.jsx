import React from 'react'
import Text from './Text'

function ParentChild() {
  return (
    <div style={{width:"300px",margin:"50px auto",padding:"50px",boxShadow:"0 0 10px blue"}}>
      <input type="Text" placeholder="Enter Some Text" />
      <br></br>
      <br></br>
      <button>Submit</button>
      <Text />
      
    </div>
  )
}

export default ParentChild 