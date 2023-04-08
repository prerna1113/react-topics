import {useState} from 'react'

function Card() {
    const [state,setState]=useState("https://imageio.forbes.com/specials-images/imageserve/5f962d31e7b04bbfd2f68758/Bugatti-Chiron-Super-Sport-300--Driving/960x0.jpg?height=473&width=711&fit=bounds")
  return (
    <div style={{margin:" 20px auto",boxShadow:"0 0 10px black",width:"350px",height:"300px",padding:"15px"}}>
        <img src={state} alt="Car Image" width="350px" height="300px" />
    </div>
  )
}

export default Card