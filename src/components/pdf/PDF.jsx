import React from "react";
import Tag from "../../pages/tag/Tag";
import Rating from "../rating/Rating";

const PDF = ({ data }) => {
  return (
    <div className="space-y-10">
      {/* Intro */}
      <div className="w-fit flex flex-col gap-6">
        <div className="space-y-6">
          <div className="flex gap-2 flex-wrap">
            {data?.tags.map((tag, i) => (
              <Tag tag={tag} key={i} />
            ))}
          </div>

          <div className="font-bold text-3xl">{data?.name}</div>

          <Rating rating={data?.rating} count={data?.reviewCount} />

          <div className="flex justify-between text-center">
            <div className="flex-1">
              <p className="font-light">Prep</p>
              <p className="font-bold text-lg">{data?.prepTimeMinutes}m</p>
            </div>
            <div className="flex-1 border-l border-r">
              <p className="font-light">Cook</p>
              <p className="font-bold text-lg">{data?.cookTimeMinutes}m</p>
            </div>
            <div className="flex-1">
              <p className="font-light">Serves</p>
              <p className="font-bold text-lg">{data?.servings}</p>
            </div>
          </div>
        </div>

        <div
          className="h-52 rounded-lg"
          style={{
            backgroundImage: `url(${data?.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>

      {/* Details */}
      <div className={`w-fit flex flex-col gap-6`}>
        <div className="space-y-4">
          <h1 className="font-bold text-lg">
            Ingredients ({data?.ingredients.length})
          </h1>
          <ol className="list-disc list-inside text-sm text-[#202223] space-y-2">
            {data?.ingredients.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </div>
        <div className="space-y-4">
          <h1 className="font-bold text-lg">Instructions</h1>
          <div className="space-y-4">
            {data?.instructions.map((item, i) => (
              <div
                key={item}
                className="border border-gray-200 p-4 rounded-lg space-y-2"
              >
                <h2 className="font-semibold text-sm">Step {i + 1}</h2>
                <p className="text-sm text-[#202223]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDF;
