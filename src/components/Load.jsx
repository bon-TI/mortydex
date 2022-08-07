import React from "react";
import Portal from "../assets/portal.png";

const Load = () => {
  return (
    <div className="h-[75vh] flex justify-center items-center">
      <div>
        <h1 className="text-white font-semibold text-center text-xl py-2">
          Loading...
        </h1>
        <img
          src={Portal}
          alt="Portal"
          className="my-4 h-[200px] w-[200px] spin"
        />
      </div>
    </div>
  );
};

export default Load;
