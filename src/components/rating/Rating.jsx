import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar, FaStar } from "react-icons/fa6";

const Rating = ({ rating, count }) => {
  return (
    <p className="flex gap-2 items-center">
      {Array.from({ length: Math.ceil(rating) }).map((_, index) => {
        const pos = index + 1;
        return rating >= pos ? (
          <FaStar key={index} />
        ) : rating >= index - 0.5 ? (
          <FaStarHalfAlt key={index} />
        ) : (
          <FaRegStar key={index} />
        );
      })}{" "}
      ({count})
    </p>
  );
};

export default Rating;
