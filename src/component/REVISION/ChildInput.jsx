import {useState} from 'react'

function ChildInput(props) {
  const [data,setData]=useState();
  return (
    <div>
      <input type="text" placeholder="Enter some text" />
      <br></br>
      <br></br>
      <button>Submit</button>
    </div>
  )
}

export default ChildInput