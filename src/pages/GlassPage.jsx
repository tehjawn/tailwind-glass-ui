import React from "react";

const GlassPage = () => {
  return (
    <>
      <div
        className="
          min-h-screen
          w-full
          bg-gradient-to-br
          from-blue-600
          to-pink-500"
        style={{
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="
              sticky
              top-0
              w-full
              p-4
              glassy
              z-10
              "
        >
          Test 1
        </div>
        <div
          className="
          min-h-screen
          flex
          items-center
          justify-center
          "
        >
          <div className="p-8 glassy rounded">Test 2A</div>
          <div
            className="
              absolute
              transform
              translate-x-8
              -translate-y-16
              p-8
              glassy
              rounded
              "
          >
            Test 2B
          </div>
        </div>
        <div
          className="
          min-h-screen
          flex
          items-center
          justify-center
          "
        >
          <div
            className="
              p-8
              glassy
              rounded
              "
          >
            Test 3
          </div>
        </div>
      </div>
    </>
  );
};

export default GlassPage;
