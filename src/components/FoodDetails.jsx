import { useEffect, useState } from "react";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});

  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "3a622b380f1240dbac2cd737a8566473";

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
    }
    fetchFood();
  }, [foodId]);

  return (
    <div>
      {foodId}
      {food.title}
      <img src={food.image} alt="" />
    </div>
  );
}
