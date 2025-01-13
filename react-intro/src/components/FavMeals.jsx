import FavMeal from "./FavMeal";
import "../style/FavMeal.css";
import { useState } from "react";

function FavMeals() {
  const favMeals = [
    "Pizza",
    "Dumplings",
    "Pad Thai",
    "Hamburger",
    "Croquetas",
    "Dumplings",
  ];

  const [favMealsArray, setFavMealsArray] = useState(favMeals)

  // const getPizzaName = (restaurantName) => {
  //   console.log("best pizza restaurant is:", restaurantName);
  // };

  const [inputText, setInputText] = useState("");

  const handleMealChange = (event) => {
    // console.log("typing");
    // console.log(event.target.value);
    setInputText(event.target.value);
    // console.log(inputText);
  };

  const handleAddMealClick = () => {
    // favMealsArray.push(inputText)
    setFavMealsArray([...favMealsArray, inputText])
    // console.log(favMeals);
  }

  return (
    <div>
      <h3>Favorite Meals:</h3>
      <input type="text" onChange={handleMealChange} />
      <button onClick={handleAddMealClick}>Add new meal</button>
      {favMealsArray.map((meal, index) => {
        return <FavMeal meal={meal} key={index} />;
      })}
    </div>
  );
}

export default FavMeals;
