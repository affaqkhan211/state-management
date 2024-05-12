import React, {useState} from 'react'

const Home = () => {

    const [count, setCount] = useState(0)

  const Increment = () => {
    if (count >= 20) {
      return
    } else {
      setCount(count + 1)
    }
  }
  const Decrement = () => {
    setCount(count - 1)
  }


  const Multiply = () => {
    setCount(count * 2)
  }
  return (
    <div className="text-center">
        <h1>{count}</h1>
        <button className='btn btn-primary me-5' onClick={Increment}>+</button>
        <button className='btn btn-danger' onClick={Decrement}>-</button>
        <button className='btn btn-secondary ms-5' onClick={Multiply}>X</button>
      </div>
  )
}

export default Home