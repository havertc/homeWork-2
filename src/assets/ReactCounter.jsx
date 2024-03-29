import React, { useState } from 'react'

const ReactCounter = () => {
    const [count, setCount]=useState(0)

    const plus=()=>{
        setCount(count +1)
    }
    const minus=()=>{
        setCount(count -1)
    }
  return (
    <div>
      <h1>{count}</h1>
      <button className='btn btn-outline-info' onClick={plus}>+</button>
      <button className='btn btn-outline-success' onClick={minus}>-</button>
    </div>
  )
}

export default ReactCounter