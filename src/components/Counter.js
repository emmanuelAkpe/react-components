import React, { useState } from 'react'

const Counter = () => {

    const [counter, setCounter]= useState(0)
    if(counter<0){
        alert("value cant be less than zero")
        setCounter(0)
    }
  return (
    <div
    >
    <button onClick={()=>{setCounter(counter +1)}}>Increase</button>
    <h1>
        {
            counter
        }
    </h1>
    <button onClick={()=>{setCounter(counter - 1)}}>Decrease</button>
    </div>

  )
}

export default Counter