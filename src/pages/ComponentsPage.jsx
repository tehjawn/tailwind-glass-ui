import React, { useState } from "react";
import GlassButton from "src/components/atoms/GlassButton";

const ComponentsPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div
      className={`
      App
      p-4
      bg-gradient-to-t
      ${darkMode ? "from-indigo-900 to-black" : "from-indigo-100 to-white"}
    `}
      style={{ fontFamily: "Josefin Sans, sans-serif" }}
    >
      <div className="relative text-gray-800">
        <div className="flex justify-end">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`
              relative
              z-10
              p-2
              rounded-lg
              bg-opacity-60
              shadow-2xl
              border
              border-opacity-25 
              ${
                darkMode ? "text-gray-800 bg-white" : "text-white bg-gray-800"
              }`}
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
        <br />
        <div
          className="
        absolute
        w-40
        h-40
        left-4
        top-4
        bg-gradient-to-tl
        from-purple-500
        to-blue-500
        rounded-full
        animate-shifting
    "
        />
        <div
          className="
        absolute
        w-12
        h-12
        right-4
        top-4
        bg-gradient-to-tl
        from-red-500
        to-yellow-500
        rounded-full
        animate-shifting
        delay-150
    "
        />
        <div
          className="relative 
          w-full
          p-4
          backdrop-filter
          backdrop-blur-sm
          shadow-lg
          border
          border-opacity-20
          bg-white
          bg-opacity-60
          rounded
          "
        >
          <h1 className="relative">Tailwind + Glassmorphism UI</h1>
        </div>
        <br />
        <div>
          <GlassButton>+</GlassButton>
        </div>
      </div>
    </div>
  );
};

export default ComponentsPage;
