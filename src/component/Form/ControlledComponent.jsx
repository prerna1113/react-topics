import {useState} from 'react'

function ControlledComponent() {
    var formStyle={
        width:"300px",
        margin:" 60px auto",
        height:"150px",
        padding:"20px",
        boxShadow:"0 0 10px red",
    }
    const submitData=()=>{

    }
  return (
    <div style={formStyle}>
         <form>
        <div>
            <input type="text" placeholder="Enter Name"  />
        </div>
        <br></br>
        <div>
            <input type="Email" placeholder="Enter Email"/>
        </div>
        <br></br>
        <div>
            <input type="password" placeholder="Enter Password"/>
        </div>
        <br></br>
        <div>
            <input type="button" value="Register"  onClick={submitData}/>
        </div>
       </form> 
    </div>
  )
}

export default ControlledComponent