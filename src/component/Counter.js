import React from 'react'
import { useState } from 'react'

function Counter() {
    const [state,setState]=useState(0);
    const [list,setList]=useState(["React","Angular","DSA"])
    const [name,setName]=useState("Prerna");
    const [city,setCity]=useState("Jaipur");
const updateCount= function(){
    setState(state +1);
}

  return (<div>
    <div style={{margin:"auto",width:"35%",height:"250px", boxShadow:"0 0 10px black"}}>
        <h1 style={{textAlign:"center",padding:"10px"}}>Count is {state}</h1>
        <button onClick={updateCount}>UpdateCount</button>
        </div>
    
    <div>
<h5>{name} is from{city}</h5>
<h3>List of technology</h3>
<ol>
    {
   list.map((ele)=>{
    return <li>{ele}</li>

   })
}
    
</ol>
    
    </div>
    </div>
  )
}

export default Counter