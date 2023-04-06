import React from 'react'
import { useState } from 'react'

function Counterr() {
    const [state,setState]=useState(0);
    const updateCount=function(){
        setState(state+1);
    }
  
  return (
    <div>
        <button onClick={updateCount}>Increment</button>
        <button>decrement</button>
        <button>reset</button>
    </div>

  )
  }

export default Counterr