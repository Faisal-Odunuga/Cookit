import React, { useContext } from "react";
import { AllContext } from "../../hooks/GlobalContext";
import Dish from "../dish/Dish";

const SavedDishes = () => {
  const { toggleSavedDish, savedDishes } = useContext(AllContext);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-10">
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
