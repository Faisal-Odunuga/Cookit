import React, { useContext } from "react";
import SearchBox from "../search-box/SearchBox";
import { AllContext } from "../../hooks/GlobalContext";

const FilterBox = () => {
  const { handleChangeMealType } = useContext(AllContext);
  return (
    <div className="flex text-black text-base font-normal gap-5">
      <select
        className="bg-transparent border-2  border-black focus:outline-none rounded-lg"
        onChange={(e) => handleChangeMealType(e)}
        defaultValue=""
      >
        <option value="">All</option>
        <option value="snack">Snack</option>
        <option value="dinner">Test</option>
      </select>
      <SearchBox />
    </div>
  );
};

export default FilterBox;
