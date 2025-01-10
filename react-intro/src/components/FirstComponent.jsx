// rfce quick action to create component

import react from 'react' // not needed

function FirstComponent() {

    const thursdaySpike = "React Intro"
    const fridaySpike = "React Advanced"

    let spike

    const day = "Monday"

    if (day === "Thursday") {
      spike = thursdaySpike
    } else {
      spike = fridaySpike
    }

  return (
      <div>
          <h2>Today's spike is: {spike}</h2>

          {/* if/else in react */}

        {day === "Thursday" ?  <h2>Today's spike is: {spike}</h2> : <h3>no clue</h3>}
          
      {/* conditional rendering */}
      
      {day === "Thursday" && <h2>Today's spike is: {spike}</h2>}
    </div>
  )
}

export default FirstComponent
