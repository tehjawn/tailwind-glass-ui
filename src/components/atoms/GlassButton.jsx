import React from "react";

const GlassButton = ({ children }) => {
  return (
    <div
      className="
        relative
        w-full
        rounded-sm
        bg-white
        bg-opacity-60
        p-4
        flex
        justify-center
        items-center
        border
        border-opacity-25
        backdrop-filter
        backdrop-blur-sm
        backdrop-saturate-200
        cursor-pointer
        hover:bg-opacity-80
        select-none
        transition-all
        shadow-lg
        text-2xl
        font-thin
        "
    >
      {children}
    </div>
  );
};

export default GlassButton;
