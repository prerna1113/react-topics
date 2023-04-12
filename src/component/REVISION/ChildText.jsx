import {useState} from 'react'
import ChildInput from './ChildInput';

function ChildText() {
  const [state,setState] = useState("No data as of now");
  return (
    <div>
      <h2>Text Component</h2>
      <p>{state}</p>
      <ChildInput sendData={setState}/>
    </div>
   
  )
}

export default ChildText