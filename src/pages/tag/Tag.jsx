import React from "react";

const Tag = ({ tag, icon }) => {
  return (
    <div
      className={`${
        tag.color || "bg-gray-300 text-gray-900"
      } flex items-center gap-1 px-2 py-[2px] rounded-md text-sm font-bold`}
    >
      {icon ? <p>{tag.icon}</p> : ""}
      {icon ? <p>{tag.tag}</p> : <p>{tag}</p>}
    </div>
  );
};

export default Tag;
