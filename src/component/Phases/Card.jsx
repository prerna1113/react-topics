import {useState,useEffect} from 'react'

function Card() {
    const [state,setState]=useState({
        image:"https://imageio.forbes.com/specials-images/imageserve/5f962d31e7b04bbfd2f68758/Bugatti-Chiron-Super-Sport-300--Driving/960x0.jpg?height=473&width=711&fit=bounds",
        title:"Car Image"
    }
    )
    useEffect(()=>{})
    const chngCard=()=>{
        setState({
            image:"https://bd.gaadicdn.com/processedimages/yamaha/mt-15-2-0/source/mt-15-2-062e4b1d700b63.jpg?tr=w-375",
            title:"Bike Image"
        })
    }
  return (
    <div style={{margin:" 20px auto",boxShadow:"0 0 10px black",width:"350px",height:"400px",padding:"15px"}}>
        <img src={state.image} alt="Car Image" width="350px" height="300px" />
        <h1>Car Image</h1>
        <button onClick={chngCard}>{state.title}</button>
    
    </div>
  )
}

export default Card