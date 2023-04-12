import React from 'react'
import { useContext } from 'react'
import mycontext from './context'


function C() {
    const data =useContext(mycontext)
  return (
    <div>
        <h2>C component</h2>
       <dl>
        <dt>
            <dd>
                {data.email}
            </dd>
        </dt>
       </dl>
    </div>
  )
}

export default C