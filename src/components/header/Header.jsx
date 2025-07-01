import React, { useContext } from "react";
import { BiSolidBookmarks } from "react-icons/bi";
import { Link } from "react-router-dom";
import SearchBox from "../search-box/SearchBox";
import FilterBox from "../filters/FilterBox";
import { AllContext } from "../../hooks/GlobalContext";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  const { isMobile, setIsMobile, handleToggleMobileNav, savedDishes } =
    useContext(AllContext);

  return (
    <nav className="sticky  p-4 lg:px-10 lg:py-4 font-bold text-base lg:text-xl z-30 top-0 bg-yellow-300 flex md:items-center justify-between ">
      <h1
        className="text-3xl lg:text-2xl w-[30%]"
        onClick={() => setIsMobile(false)}
      >
        <Link to="/">CookIt</Link>
      </h1>
      <div className="hidden text-3xl w-[70%] lg:text-2xl lg:flex justify-between gap-[2rem] items-center">
        <FilterBox />
        <Link to="/saved-dishes" className="cursor-pointer basis-2/3">
          <p className="flex items-center gap-1">
            <BiSolidBookmarks />
            <span>Saved Dishes ({savedDishes?.length})</span>
          </p>
        </Link>
      </div>

      {/* Moblie Responsivenss */}
      <span className="lg:hidden text-3xl flex gap-5">
        <Link
          to="/saved-dishes"
          className="cursor-pointer text-2xl"
          onClick={() => setIsMobile(false)}
        >
          <p className="flex items-center gap-1 relative">
            <BiSolidBookmarks className="text-3xl" />
            <span className="absolute w-6 h-6 -bottom-4 -right-3 text-center text-sm font-normal bg-black text-white rounded-full">
              {savedDishes?.length}
            </span>
          </p>
        </Link>
        <IoMenu onClick={handleToggleMobileNav} />
      </span>
      {isMobile && (
        <div className="lg:hidden absolute bg-yellow-300 p-4 w-full top-16 left-0 ">
          <FilterBox />
        </div>
      )}
    </nav>
  );
};

export default Header;
