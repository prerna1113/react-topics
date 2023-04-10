import React from 'react'

function Form() {
    var formStyle={
        width:"300px",
        margin:" 20px auto",
        height:"150px",
        padding:"20px",
        boxShadow:"0 0 10px red",
    }
  return (
    <div style={formStyle}>
       <form>
        <div>
            <input type="text" placeholder="Enter Name" />
        </div>
        <br></br>
        <div>
            <input type="text" placeholder="Enter Email" />
        </div>
        <br></br>
        <div>
            <input type="text" placeholder="Enter Password" />
        </div>
        <br></br>
        <div>
            <input type="button" value="Register" />
        </div>
       </form>
    </div>
  )
}

export default Form