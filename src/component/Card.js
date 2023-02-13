import React, { useState } from 'react'

function Card() {
    const [state,setState]=useState("https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVyY2VkZXMlMjBjYXJ8ZW58MHx8MHx8&w=1000&q=80");
  return (
    <div style={{padding:"20px"}}>
        <div style={{width:"350px", margin:"auto",boxShadow:"0 0 10px black"}}>
        <h2>Car component</h2>
        <img  style={{ width:"300px",padding:"10px"}}src={state}/>
        </div>
    </div>
  )
}

export default Card