import React, { useContext, useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { AllContext } from "../../hooks/GlobalContext";
import Dish from "../dish/Dish";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const FilteredDishes = () => {
  const { mealType } = useParams();
  const {
    // setDishes,
    toggleSavedDish,
    filteredMeals,
    setFilteredMeals,
    setMealType,
  } = useContext(AllContext);
  const {
    data: res,
    isLoading,
    error,
  } = useFetch(`https://dummyjson.com/recipes/meal-type/${mealType}`);
  const data = res?.recipes;
  useEffect(() => {
    // setDishes(data);
    setMealType(mealType);
    setFilteredMeals(data);
  }, [setFilteredMeals, data, setMealType, mealType]);
  return (
    <div className="dishes-layout">
      {isLoading && (
        <AiOutlineLoading3Quarters className="animate-spin text-6xl m-auto col-span-4 h-screen" />
      )}
      {error && <div className="m-auto col-span-4 h-screen">{error}</div>}
      {filteredMeals?.length === 0 && !isLoading && (
        <div className="m-auto col-span-4 h-screen">No data</div>
      )}
      {filteredMeals?.map((item) => (
        <Dish key={item.id} dish={item} handleToggleSave={toggleSavedDish} />
      ))}
    </div>
  );
};

export default FilteredDishes;
