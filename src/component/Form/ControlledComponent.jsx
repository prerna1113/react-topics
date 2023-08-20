import {useState} from 'react'

function ControlledComponent() {
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        password:"",
    })
    var formStyle={
        width:"300px",
        margin:" 60px auto",
        height:"150px",
        padding:"20px",
        boxShadow:"0 0 10px red",
    }
    const submitData=(event)=>{
        event.preventDefault();
        
        console.log(formData);

    }
  return (
    <div style={formStyle}>
         <form>
        <div>
            <input type="text" placeholder="Enter Name" 
            onChange={(event)=>{
                setFormData({
                    ...formData,
                    name:event.target.value,
                })

            }} />
        </div>
        <br></br>
        <div>
            <input type="Email" placeholder="Enter Email" 
            onChange={(event)=>{
                setFormData({
                    ...formData,
                    email:event.target.value,

                })

            }}
            />
        </div>
        <br></br>
        <div>
            <input type="password" placeholder="Enter Password" 
             onChange={(event)=>{
                setFormData({
                    ...formData,
                    password:event.target.value,

                })

            }}
            />
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