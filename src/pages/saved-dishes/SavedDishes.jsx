import React, { useContext, useEffect } from "react";
import { AllContext } from "../../hooks/GlobalContext";
import Dish from "../dish/Dish";

const SavedDishes = () => {
  const { setQuery, setMealType, toggleSavedDish, savedDishes } =
    useContext(AllContext);
  useEffect(() => {
    setQuery("");
    setMealType("");
    localStorage.setItem("savedDishes", JSON.stringify(savedDishes));
  }, [savedDishes, setQuery, setMealType]);
  return (
    <div className="dishes-layout">
      {savedDishes.length === 0 && (
        <div className="m-auto col-span-4 h-screen">No data</div>
      )}
      {savedDishes.map((item) => (
        <Dish key={item.id} dish={item} handleToggleSave={toggleSavedDish} />
      ))}
    </div>
  );
};

export default SavedDishes;
