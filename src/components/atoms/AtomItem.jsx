import React from "react";

const AtomItem = ({ atomComponent, atomCode }) => {
  return (
    <div
      className="flex
        flex-col
        justify-center
        items-center
        p-4
        m-4
        border
        rounded-md
        border-gray-100
        group
        hover:shadow-2xl
        transform
        hover:-translate-y-1
        transition-all"
    >
      <div
        className="w-full flex justify-center items-center p-4
          bg-gradient-to-br
          from-blue-600
          to-pink-500 rounded-md transition-colors"
      >
        {atomComponent}
      </div>
      <code className="p-4 font-thin text-sm text-gray-200 group-hover:text-gray-400 group-hover:bg-gray-100 rounded-b-md transition-colors">
        {atomCode}
      </code>
    </div>
  );
};

export default AtomItem;
