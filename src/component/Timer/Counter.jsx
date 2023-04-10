import {useState} from 'react'
import styles from './Counter.module.css'

function Counter() {
  const[state,setState]= useState(0);

  const IncreaseValue=()=>{
    setInterval(()=>{

      setState((prevState)=>prevState+1)
    },1000)
  }


  const StopValue=()=>{
    
  }
  return (
    <div className={styles.timer}>
        <h1>Timer is {state}</h1>
        <button onClick={IncreaseValue}>start</button> &nbsp; &nbsp;
        <button onClick={StopValue}>stop</button>
    </div>
  )
}

export default Counter