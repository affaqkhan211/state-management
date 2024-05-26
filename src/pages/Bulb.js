import React, { useState } from 'react'

const Bulb = () => {
    const [isOn, setIsOn] = useState(false)

    const Switch = () => {
      setIsOn(!isOn)
    }
  return (
    <>
        <div className="text-center mt-5">
            <img src={isOn ? "/images/bulb-on.jpg" : "/images/bulb-off.jpg"} alt="" style={{width : "250px", height : "250px"}}/> <br />
            <button className='btn btn-primary mt-5' onClick={Switch}>{isOn ? "Switch off" : "Switch On"}</button>
            
        </div>
    </>
  )
}

export default Bulb