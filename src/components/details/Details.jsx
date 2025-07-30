import React from "react";

const Details = ({ data, print }) => {
  return (
    <div
      className={`w-full grid grid-cols-1 md:grid-cols-3 justify-between gap-4 ${print}`}
    >
      <div className="space-y-6 lg:sticky lg:top-24 self-start h-fit">
        <h1 className="font-bold text-xl">
          Ingredients ({data?.ingredients.length})
        </h1>
        <ol className="list-disc list-inside text-[#202223] text-sm space-y-5">
          {data?.ingredients.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </div>
      <div className="col-span-2 lg:w-1/2 space-y-6">
        <h1 className="font-bold text-xl"> Instructions:</h1>
        <div className="space-y-5">
          {data?.instructions.map((item, i) => (
            <div key={item} className="border p-4 rounded-lg space-y-2">
              <h2 className="font-bold">Step {i + 1}</h2>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;
