import React, { useState } from 'react'

function Card() {
    const [state,setState]=useState({
img:"https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVyY2VkZXMlMjBjYXJ8ZW58MHx8MHx8&w=1000&q=80",
title:"Car component",
buttonTitle:" Show Bike Card",
    });
    
  return (
    <div style={{padding:"20px"}}>
        <div style={{width:"350px", margin:"auto",boxShadow:"0 0 10px black"}}>
        <h2>{state.title}</h2>
        <img  style={{ width:"300px",padding:"10px"}}src={state.img}/>
        <button  style={{margin:"10px"}}onClick={()=>{
            setState({
                img:"https://bd.gaadicdn.com/processedimages/yamaha/mt-15-2-0/source/mt-15-2-062e4b1d700b63.jpg?tr=w-375",
                title:"bike component",
                buttonTitle:" Show Car Card"
            })
            
        }}>{state.buttonTitle}</button>
        </div>
    </div>
  )
}

export default Card