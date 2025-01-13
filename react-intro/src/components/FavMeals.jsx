import FavMeal from "./FavMeal";
import "../style/FavMeal.css"

function FavMeals() {
  const favMeals = [
    "Pizza",
    "Dumplings",
    "Pad Thai",
    "Hamburger",
    "Croquetas",
    "Dumplings",
  ];

  const getPizzaName = (restaurantName) => {
    console.log("best pizza restaurant is:", restaurantName);
  };

  return (
    <div>
      <h3>Favorite Meals:</h3>
      {favMeals.map((meal, index) => {
        return <FavMeal meal={meal} key={index} getPizzaName={getPizzaName}  />;
      })}
    </div>
  );
}

export default FavMeals;
