import {useState} from 'react'

function ChildInput(props) {
  const [input,setInput]=useState();
  const getData=()=>{
    props.sendData(input);

  }
  return (
    <div>
      <input type="text" placeholder="Enter some text"
      onChange={(e)=>{setInput(e.target.value)}} />
      <br></br>
      <br></br>
      <button onClick={getData}>Submit</button>
    </div>
  )
}

export default ChildInput