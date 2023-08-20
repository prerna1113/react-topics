

import React from 'react'

function Registration() {
  return (
    <div style={{
        width:"500px",
        border:"1px solid red",
        margin:"auto"
        
        }}>
        <h1>Registration Form</h1>
        <form >
       
            <input 
            type = "text" 
            // value = "registration" 
            placeholder = "please enter your name"
            />
            <br></br>
            <br>
            </br>

            <input 
            type = "email"
            // value= "email"
            placeholder = "please enter your email address"
    
            />
            <br></br>
            <br></br>

            <input 
            type = "password"
            // value ="password"
            placeholder ="please enter your password"
            />
            <br></br>
            <br></br>

            <button
            >submit</button>
        </form>

         </div>
  )
}

export default Registration