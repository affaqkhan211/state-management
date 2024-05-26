import React, { useState } from 'react'

const Colors = () => {
    const [colors, setColors] = useState("black")

    const changeColor = (c) => {
      setColors(c)
    }
  return (
    <div className="text-center">
        <h1 style={{color : colors}}>i am {colors}</h1>
        <button className='btn btn-primary me-4' onClick = {() => changeColor("blue")}>Blue</button>
        <button className='btn btn-danger me-4' onClick={() => changeColor("red")}>Red</button>
        <button className='btn btn-secondary me-4' onClick={() => changeColor("gray")}>Gray</button>
        <button className='btn btn-success me-4' onClick={() => changeColor("Green")}>Green</button>
    </div>
  )
}

export default Colors