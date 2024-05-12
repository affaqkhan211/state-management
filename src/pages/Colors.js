import React, { useState } from 'react'

const Colors = () => {
    const [color, setColor] = useState("black")

    const changeColor = (color) => {
        setColor(color)
    }
  return (
    <div className="text-center">
        <h1 style={{color : color}}>Change My color according to buttons</h1>
        <button className='btn btn-danger me-3' onClick={()=> changeColor("red")}>Red</button>
        <button className='btn btn-success me-3' onClick={() => changeColor("green")}>Green</button>
        <button className='btn btn-primary me-3' onClick={() => changeColor("blue")}>Blue</button>
    </div>
  )
}

export default Colors