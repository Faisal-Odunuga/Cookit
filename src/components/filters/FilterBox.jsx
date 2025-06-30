import React, { useContext } from "react";
import SearchBox from "../search-box/SearchBox";
import { AllContext } from "../../hooks/GlobalContext";

const FilterBox = () => {
  const { mealType, allMealTypes, handleChangeMealType } =
    useContext(AllContext);
  return (
    <div className="flex text-black text-base font-normal gap-5">
      <select
        className="bg-transparent border-2  border-black focus:outline-none rounded-lg"
        value={mealType}
        onChange={(e) => handleChangeMealType(e)}
      >
        <option value="" disabled>
          All
        </option>

        {allMealTypes.map((item, i) => (
          <option value={item.toLowerCase()} key={i}>
            {item}
          </option>
        ))}
      </select>
      <SearchBox />
    </div>
  );
};

export default FilterBox;
