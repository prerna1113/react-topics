import {useRef} from 'react'

function Dom() {
    const h2Ref=useRef()
    const btnRef=useRef()
    const ChangeDom=()=>{
        h2Ref.current.style.color="green";
        btnRef.current.innerText="style Modified";
    }
  return (
    <div style={{textAlign:"center"}}>
        <h2 ref={h2Ref}>React useRef() concept</h2>
        <button  ref={btnRef} onClick={ChangeDom}> Change Style</button>
    </div>
  )
}

export default Dom