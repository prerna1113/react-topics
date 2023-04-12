import {useState} from 'react'
import B from './B'
import mycontext from './context'


function A() {
    const [state,setState]=useState({
        name:"Chris",
        City:"Sydney",
        email:"chris@gmail.com"
    })
  return (
    <div>
        <h1>A component</h1>
       <mycontext.Provider value={state}>
        <B/>
        </mycontext.Provider>
        
    </div>
  )
}

export default A