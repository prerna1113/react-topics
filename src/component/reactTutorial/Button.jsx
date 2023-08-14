import React, { useState } from 'react'

function Button() {
    const [state,setState] = useState(0);

    function handleClick(){
        setState(state+1);
    }
  return (
    <div>
        <button onClick={handleClick}>Click {state} times</button>

    
    </div>
  )
}

export default Button