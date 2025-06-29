import React from "react";
import Tag from "../../pages/tag/Tag";
import Rating from "../rating/Rating";

const Intro = ({ data }) => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-3 justify-between items-center gap-4">
      <div className="col-span-1 space-y-8">
        <div className="flex gap-1 gap-x-2 flex-wrap">
          {data?.tags.map((tag, i) => (
            <Tag tag={tag} key={i} />
          ))}
        </div>
        <div className="font-bold text-4xl">{data?.name}</div>
        <Rating rating={data?.rating} count={data?.reviewCount} />
        <div className="flex">
          <div className="border-r-[1px] px-4 pl-0">
            <p className="font-light">Prep</p>
            <p className="font-bold text-xl">{data?.prepTimeMinutes}m</p>
          </div>
          <div className="border-r-[1px] px-4">
            <p className="font-light">Cook</p>
            <p className="font-bold text-xl">{data?.cookTimeMinutes}m</p>
          </div>
          <div className="px-4">
            <p className="font-light">Serves</p>
            <p className="font-bold text-xl">{data?.servings}</p>
          </div>
        </div>
      </div>
      <div
        className="col-span-2 h-[30vh] lg:h-full rounded-lg"
        style={{
          backgroundImage: `url(${data?.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
};

export default Intro;
