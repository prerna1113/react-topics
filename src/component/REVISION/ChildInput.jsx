import {useState} from 'react'

function ChildInput(props) {
  const [data,setData]=useState();
  const getData=()=>{
   props.sendData(data);
  }
  return (
    <div>
      <input type="text" placeholder="Enter some text" 
      onChange={(e)=>{setData(e.target.value)}} />
      <br></br>
      <br></br>
      <button onClick={getData}>Submit</button>
    </div>
  )
}

export default ChildInput