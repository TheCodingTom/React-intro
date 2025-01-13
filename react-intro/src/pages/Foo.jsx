import React, { useEffect, useState } from 'react'

function Foo() {

    const [count, setCount] = useState(1)
    const [count2, setCount2] = useState(10)
    function doSomething() {
        alert("Hello!")
    }

   
    useEffect(() => {
        doSomething()
    }, [count])
    

    const increaseCounter = () => {
      setCount(count + 1)
    }

    const increaseCounter2 = () => {
        setCount2(count2 + 10)
      }
  return (
    <div>
        <h1>Home</h1>
        {/* <button onClick={doSomething}>Alert</button> */}
        <h2>{count}</h2>
        <h2>{count2}</h2>
        <button onClick={increaseCounter}>+1</button>
        <button onClick={increaseCounter2}>+10</button>
    </div>
  )
}

export default Foo