import {useRef} from 'react'

function Form() {
    const nameRef=useRef(null);
    const emailRef=useRef(null);
    const passwordRef=useRef(null);
        var formStyle={
        width:"300px",
        margin:" 20px auto",
        height:"150px",
        padding:"20px",
        boxShadow:"0 0 10px red",
    }
    const submitData=()=>{
        console.log(nameRef.current.value,emailRef.current.value,passwordRef.current.value)
    }
  return (
    <div style={formStyle}>
       <form>
        <div>
            <input type="text" placeholder="Enter Name"  ref={nameRef}/>
        </div>
        <br></br>
        <div>
            <input type="text" placeholder="Enter Email"  ref={emailRef}/>
        </div>
        <br></br>
        <div>
            <input type="text" placeholder="Enter Password"  ref={passwordRef}/>
        </div>
        <br></br>
        <div>
            <input type="button" value="Register"  onClick={submitData}/>
        </div>
       </form>
    </div>
  )
}

export default Form