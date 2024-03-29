
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ReduxCounter = () => {
    const {counter}=useSelector(state=>state.counter)
    const dispatch=useDispatch()
    console.log(counter);

    const plusCounter=()=>{
        dispatch({type: 'plus'})
    }
    const minusCounter=()=>{
        dispatch({type: 'minus'})
    }
  return (
    <div>
        <h1>{counter}</h1>
        <button onClick={plusCounter} className='btn btn-outline-success'>+</button>
        <button onClick={minusCounter} className='btn btn-outline-info'>-</button>
    </div>
  )
}

export default ReduxCounter