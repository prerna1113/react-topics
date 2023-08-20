

import React, { useState } from 'react'

function Registration() {
  const [state,setState] = useState({
    name:"",
    email: "",
    password: "",
  })

  const [errorMessage, setErrorMessage] = useState('');

  const handleInput =(event) => {
    const {name,value} = event.target;
    setState((prevState)=> ({
      ...prevState,
      [name] :value
    }));

  };

  

  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
    const validateError=validate(state)
    setErrorMessage(validateError)

    if (Object.keys(validateError).length === 0) {
      setState({
        name: "",
        email: "",
        password: "",
      });
    
  };
   


  }

  const validate = (values) =>{
    let error = {};
    if(!values.name){
      error.name = "please enter a name"
    }
    if(!values.email) {
      error.email = "please enter an email address"
    }
    return error;
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
              name="name"
              placeholder = "please enter your name"
              value={state.name}
              onChange={handleInput}
             
           
            />
           {errorMessage && <p>{errorMessage.name}</p>} 

            <br></br>
            <br>
            </br>

            <input 
            type = "email"
            name="email"
            placeholder = "please enter your email address"
            value={state.email}
            onChange={handleInput}
            
            />
             {/* { <p>{errorMessage.email}</p>}   */}
            <br></br>
            <br></br>

            <input 
            type = "password"
            name="password"
            placeholder ="please enter your password"
            value={state.password}
            onChange={handleInput}
            
            />
             {/* { <p>{errorMessage.password}</p>}   */}
            <br></br>
            <br></br>

            <button
            onClick={handleSubmit}

            >submit</button>
        </form>

         </div>
  )
}

export default Registration