import React, { useContext } from "react";
import { BiBookmark, BiBookmarks, BiSolidBookmarks } from "react-icons/bi";
import { Link } from "react-router-dom";
import SearchBox from "../search-box/SearchBox";
import FilterBox from "../filters/FilterBox";
import { AllContext } from "../../hooks/GlobalContext";

const Header = () => {
  const { savedDishes } = useContext(AllContext);

  return (
    <nav className="sticky top-0 bg-yellow-300 flex flex-col lg:flex-row lg:items-center gap-2 justify-between px-10 py-4 font-bold text-xl z-30">
      <h1 className="">
        <Link to="/">CookIt</Link>
      </h1>
      <FilterBox />
      <Link to="/saved-dishes" className="cursor-pointer">
        <p className="flex items-center gap-1">
          <BiSolidBookmarks />
          <span>Saved Dishes ({savedDishes?.length})</span>
        </p>
      </Link>
    </nav>
  );
};

export default Header;
