import React, { useState } from "react";

function Counter() {
  console.log("component rendered");
  let counter = 0;

  // const [counterStateVariable, modifyCounter] = useState(0)
  // const [counterStateVariable, setCounterStateVariable] = useState(0)
  const [counterStateVariable, setCounterStateVariable] = useState(counter);

  // console.log(counterStateVariable);

  const increaseCount = () => {
    //   console.log("click works");
    //   counter = counter + 1
    //   console.log(counter);
    setCounterStateVariable(counterStateVariable + 1);
  };

  return (
    <div>
      {console.log("%c JSX rendered", "color:green")}
      <h1>Counter</h1>
      <h2>{counterStateVariable}</h2>
      <button onClick={increaseCount}>+1</button>
    </div>
  );
}

export default Counter;
