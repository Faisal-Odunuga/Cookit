import React, { useContext, useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { AllContext } from "../../hooks/GlobalContext";
import Dish from "../dish/Dish";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const FilteredDishes = () => {
  const { mealType } = useParams();
  const { toggleSavedDish, filteredMeals, setFilteredMeals } =
    useContext(AllContext);
  const {
    data: res,
    isLoading,
    error,
  } = useFetch(`https://dummyjson.com/recipes/meal-type/${mealType}`);
  const data = res?.recipes;
  useEffect(() => {
    setFilteredMeals(data);
  }, [setFilteredMeals, data]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-10">
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
