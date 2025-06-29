import React, { useContext, useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { AllContext } from "../../hooks/GlobalContext";
import Dish from "../dish/Dish";

const Home = () => {
  const {
    data: res,
    isLoading,
    error,
  } = useFetch("https://dummyjson.com/recipes?limit=0");
  const data = res?.recipes;

  const {
    setMealType,
    dishes,
    setDishes,
    setQuery,
    setSavedDishes,
    toggleSavedDish,
  } = useContext(AllContext);

  useEffect(() => {
    setQuery("");
    setMealType("");
    if (data) setDishes(data);
  }, [data, setDishes, setQuery, setSavedDishes, setMealType]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-10">
      {isLoading && (
        <AiOutlineLoading3Quarters className="animate-spin text-6xl m-auto col-span-4 h-screen" />
      )}
      {error && <div className="m-auto col-span-4 h-screen">{error}</div>}
      {dishes.length === 0 && (
        <div className="m-auto col-span-4 h-screen">No data</div>
      )}
      {dishes?.map((item) => (
        <Dish key={item.id} dish={item} handleToggleSave={toggleSavedDish} />
      ))}
    </div>
  );
};

export default Home;
