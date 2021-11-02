import React from "react";
import AtomItem from "src/components/atoms/AtomItem";
import GlassButton from "src/components/atoms/GlassButton";
import GlassDot from "src/components/atoms/GlassDot";

const Atoms = () => {
  return (
    <div className="p-8 bg-white shadow-2xl rounded-md">
      <h1 className="text-center font-bold text-xl my-4">⚛️ Atoms</h1>
      <div className="flex justify-center flex-wrap">
        <AtomItem
          atomComponent={<GlassButton>Hello!</GlassButton>}
          atomCode={"<GlassButton />"}
        />
        <AtomItem atomComponent={<GlassDot />} atomCode={"<GlassDot />"} />
        <AtomItem
          atomComponent={
            <div className="border rounded-sm flex flex-col">
              <div className="bg-white justify-start p-2">Test</div>
              <div className="glassy p-4">Test</div>
            </div>
          }
          atomCode={"<GlassWindow />"}
        />
      </div>
    </div>
  );
};

export default Atoms;
