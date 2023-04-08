import {useState} from 'react'
import Input from './Input'

function Text() {
    const [state,setState]=useState("No data as of now")
  return (
    <div>
        <h2>Text Component</h2>
        <p>{state}</p>
        <Input  sendData={setState}/>
    </div>
    
  )
}

export default Text