function FavMeals() {
  const favMeals = ["Pizza", "Dumplings", "Pad Thai", "Hamburger", "Croquetas"];
  return (
    <div>
      <h3>Favorite Meals:</h3>
      {favMeals.map((meal) => {
        return <p>{meal}</p>;
      })}
    </div>
  );
}

export default FavMeals;
