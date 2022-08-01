import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center absolute w-full p-4 z-50">
      <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
        NETFLIX
      </h1>
      <div>
        <button className="text-white pr-4">Sign In</button>
        <button className="bg-red-600 text-white px-6 py-2 rounded">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
