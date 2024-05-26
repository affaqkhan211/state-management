import React, { useState } from 'react'

const Home = () => {

  const [count, setCount] = useState(0)

  const Increment = () => {
    setCount(count+10)
  }
  const Decrement = () => {
    setCount(count - 1)
  }


  const Multiply = () => {
    setCount(count * 2)
  }

  return (
    <>
      <div className="text-center">
        <h1>{count}</h1>
      
        <button className='btn btn-primary me-5' onClick={Increment}>+</button>
        <button className='btn btn-danger' onClick={Decrement}>-</button>
        <button className='btn btn-secondary ms-5' onClick={Multiply}>X</button>
      </div>

      
    </>

  )
}

export default Home


//1) value assigned to initial variable named as count
// 2) now we makes a button with any name and call an event onClick = {AnyName}
// 3) now we have to update the value of that function which we called in state