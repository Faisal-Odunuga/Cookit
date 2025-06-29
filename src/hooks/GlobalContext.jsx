/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AllContext = createContext();

const GlobalContext = ({ children }) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [dishes, setDishes] = useState([]);
  const [mealType, setMealType] = useState("");
  const [filteredMeals, setFilteredMeals] = useState([]);

  const [savedDishes, setSavedDishes] = useState(
    () => JSON.parse(localStorage.getItem("savedDishes")) || []
  );

  const handleChangeQuery = (e) => {
    const value = e.target.value;
    setQuery(value);
  };

  const mealTypes = ["desert", "snack", "lunch", "dinner", "side dish"];
  const toggleSavedDish = (id) => {
    setSavedDishes((prev) => {
      const exists = prev.find((dish) => dish.id === id);

      if (exists) {
        return prev.filter((dish) => dish.id !== id);
      } else {
        const toAdd = dishes.find((dish) => dish.id === id);
        if (!toAdd) return prev;
        return [...prev, toAdd];
      }
    });
  };

  const handleChangeMealType = (e) => {
    const value = e.target.value;
    if (!value) return;
    setMealType(value);
    navigate(`/meal-type/${value}`);
  };

  useEffect(() => {
    localStorage.setItem("savedDishes", JSON.stringify(savedDishes));
  }, [savedDishes]);

  useEffect(() => {
    if (!query.trim()) return;

    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/recipes/search?q=${query}`
        );
        const json = await res.json();
        setDishes(json.recipes);
      } catch (err) {
        console.error("Search error:", err);
        setDishes((prev) => [...prev]);
      }
    };

    fetchData();
  }, [query]);

  return (
    <AllContext.Provider
      value={{
        query,
        setQuery,
        handleChangeQuery,
        savedDishes,
        setSavedDishes,
        dishes,
        setDishes,
        toggleSavedDish,
        mealType,
        setMealType,
        handleChangeMealType,
        filteredMeals,
        setFilteredMeals,
        mealTypes,
      }}
    >
      {children}
    </AllContext.Provider>
  );
};

export default GlobalContext;
