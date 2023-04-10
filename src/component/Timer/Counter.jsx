import React from 'react'
import styles from './Counter.module.css'

function Counter() {
  return (
    <div className={styles.timer}>
        <h1>Timer is 0</h1>
        <button>start</button> &nbsp; &nbsp;
        <button>stop</button>
    </div>
  )
}

export default Counter