import {useState,useRef} from 'react'
import styles from './Counter.module.css'

function Counter() {
  const[state,setState]= useState(0);
  const ref1=useRef();

  const IncreaseValue=()=>{
   ref1.current= setInterval(()=>{

      setState((prevState)=>prevState+1)
    },1000)
  }


  const StopValue=()=>{
    clearInterval(ref1.current);
    
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