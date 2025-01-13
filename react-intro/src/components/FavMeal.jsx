// import React from 'react'

function FavMeal(props) {
  // const customStyle = { // in this way we can apply style only to this component
  //     backgroundColor:"blue", // has to be camelcased, we can't use the same format as in
  //     fontSize:"bold",
  // }
  // console.log(props);

  // const bestPizza = "Standard";

  // const sendRestaurantNameToParent = () => { // to send info from children to parents is better to create a wrapper function and inside of it call the function that we need
  //     props.getPizzaName(bestPizza)
  // }
  return (
    <div>
      {/* <p style={customStyle}>Emoji: 🍉</p> */}
      {/* <button onClick={sendRestaurantNameToParent}>Reveal restaurant</button> */}
      <p className="red">{props.meal}</p>
      
    </div>
  );
}

export default FavMeal;
