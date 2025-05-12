import { useEffect, useState } from "react";
import styles from "./search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "3a622b380f1240dbac2cd737a8566473";

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");

  //syntax of useEffect hook
  // useEffect(() => {
  //   async function fetchFood() {
  //     const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
  //     const data = await res.json();
  //     // console.log(data.results);
  //     setFoodData(data.results);
  //   }
  //   fetchFood();
  // }, [query]);

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
    </div>
  );
}
