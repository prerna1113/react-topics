

import React, { useState } from 'react'

function Registration() {
  const [state,setState] = useState({
    name:"",
    email: "",
    password: "",
  })

  
  const handleInput = (event) => {
    event.preventDefault();
    console.log(state);
    


  }
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
              placeholder = "please enter your name"
            onChange={(event)=>
              {setState({
                ...state,
               name:event.target.value
              }
            
            )

            }}
          
            />
            <br></br>
            <br>
            </br>

            <input 
            type = "email"
            placeholder = "please enter your email address"
            onChange ={(event) =>{
              setState({
                ...state,
                email:event.target.value

            })}}
    
            />
            <br></br>
            <br></br>

            <input 
            type = "password"
            placeholder ="please enter your password"
            onChange={(event) =>{setState({
              ...state,
              password:event.target.value
            })
          }}
            />
            <br></br>
            <br></br>

            <button
            onClick={handleInput}

            >submit</button>
        </form>

         </div>
  )
}

export default Registration