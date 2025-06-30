import React, { useContext } from "react";
import Rating from "../../components/rating/Rating";
import Tag from "../tag/Tag";
import { GiWorld } from "react-icons/gi";
import { IoPersonCircleSharp } from "react-icons/io5";
import { MdOutlineTimer } from "react-icons/md";
import { FaBrain } from "react-icons/fa";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AllContext } from "../../hooks/GlobalContext";

const Dish = ({ dish, handleToggleSave }) => {
  const tags = [
    {
      tag: dish.servings + " mins",
      icon: <IoPersonCircleSharp />,
      color: "bg-blue-300",
    },
    {
      tag: dish.cookTimeMinutes,
      icon: <MdOutlineTimer />,
      color: "bg-green-300",
    },
    {
      tag: dish.difficulty,
      icon: <FaBrain />,
      color: "bg-yellow-300",
    },
    {
      tag: dish.cuisine,
      icon: <GiWorld />,
      color: "bg-red-300",
    },
  ];
  const { savedDishes } = useContext(AllContext);
  const isSaved = savedDishes.some((d) => d.id === dish.id);
  return (
    <div className="p-0 border rounded-xl">
      <div
        style={{
          backgroundImage: `url(${dish.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="h-[30vh] w-full rounded-t-xl z-index-0  relative"
      >
        <div
          className="right-4 top-4 absolute cursor-pointer"
          title="Save this dish"
          onClick={() => handleToggleSave(dish.id)}
        >
          {!isSaved ? (
            <BsBookmark className="flex text-5xl bg-yellow-500 text-white p-3 rounded-full" />
          ) : (
            <BsBookmarkFill className="flex text-5xl bg-yellow-500 text-white p-3 rounded-full" />
          )}
        </div>
      </div>
      <div className="p-4 space-y-2">
        <p className="font-bold text-lg">{dish.name}</p>
        <div>
          <Rating rating={dish.rating} count={dish.reviewCount} />
        </div>
        <div className="flex gap-1 gap-x-2 flex-wrap">
          {tags.map((tag, i) => (
            <Tag tag={tag} key={i} icon />
          ))}
        </div>
        <div className="">
          <Link to={`/dishes/${dish.id}`}>
            <button className="bg-yellow-300 p-3 rounded-lg w-full">
              View Dish
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dish;
