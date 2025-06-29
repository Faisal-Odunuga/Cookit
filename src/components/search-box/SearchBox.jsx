import React, { useContext } from "react";
import { AllContext } from "../../hooks/GlobalContext";

const SearchBox = () => {
  const { query, handleChangeQuery } = useContext(AllContext);
  return (
    <div>
      <input
        type="text"
        placeholder="Search Dishes....."
        value={query}
        onChange={handleChangeQuery}
        className="bg-transparent border-2 border-black focus:outline-none text-black text-base font-normal py-2 px-4 rounded-lg placeholder:text-gray-600"
      />
    </div>
  );
};

export default SearchBox;
