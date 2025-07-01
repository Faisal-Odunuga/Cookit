/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const AllContext = createContext();

const GlobalContext = ({ children }) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  // const [isDark, setIsDark] = useState(false);
  const [dishes, setDishes] = useState([]);
  const [mealType, setMealType] = useState("");
  const [filteredMeals, setFilteredMeals] = useState([]);
  const [savedDishes, setSavedDishes] = useState(
    () => JSON.parse(localStorage.getItem("savedDishes")) || []
  );

  const allMealTypes = [
    "Dessert",
    "Snack",
    "Lunch",
    "Dinner",
    "Side dish",
    "Appetizer",
    "Breakfast",
    "Beverage",
  ];
  const toggleSavedDish = (id) => {
    setSavedDishes((prev) => {
      const exists = prev.find((dish) => dish.id === id);
      if (exists) {
        toast.warning("Dish has been removed from your saved dishes");
        return prev.filter((dish) => dish.id !== id);
      } else {
        const toAdd = dishes.find((dish) => dish.id === id);
        if (!toAdd) return prev;
        toast.success("Dish has been added to your saved dishes");
        return [...prev, toAdd];
      }
    });
  };

  const handleChangeMealType = (e) => {
    const value = e.target.value;
    if (!value) return;
    navigate(`/meal-type/${value}`);
  };

  const handleChangeQuery = (e) => {
    const value = e.target.value;
    setQuery(value);
  };

  const handleToggleMobileNav = () => {
    setIsMobile(!isMobile);
  };
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
        allMealTypes,
        filteredMeals,
        setFilteredMeals,
        isMobile,
        setIsMobile,
        handleToggleMobileNav,
      }}
    >
      {children}
    </AllContext.Provider>
  );
};

export default GlobalContext;
