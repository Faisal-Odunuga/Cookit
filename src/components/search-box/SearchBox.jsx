import React, { useContext, useEffect } from "react";
import { AllContext } from "../../hooks/GlobalContext";

const SearchBox = () => {
  const { query, setDishes, handleChangeQuery } = useContext(AllContext);

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
  }, [query, setDishes]);
  return (
    <div className="w-full">
      <input
        type="search"
        placeholder="Search Dishes....."
        value={query}
        onChange={handleChangeQuery}
        className="bg-transparent border-2 border-black focus:outline-none text-black text-base font-normal py-2 px-4 rounded-lg placeholder:text-gray-600 w-full max-w-[50rem]"
      />
    </div>
  );
};

export default SearchBox;
