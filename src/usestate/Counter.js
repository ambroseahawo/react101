import React, { useState } from "react"
import "./style.css"

const Counter = () => {
  const [number, setNumber] = useState(0)

  const handleIncrease = () => {
    setNumber(number + 1)
  }

  const handleDecrease = () => {
    if (number < 1){
      setNumber(0)
    } else{
      setNumber(number - 1)
    }
  }

  const handleReset = () => setNumber(0)

  return (
    <div className="container">
      <h2>React Example 1 - Counter</h2>
      <div className="inner-content">
        <h1>{number}</h1>
        <div className="buttons">
          <button onClick={handleIncrease}>Increase</button>
          <button onClick={handleDecrease}>Decrease</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  )
}

export default Counter