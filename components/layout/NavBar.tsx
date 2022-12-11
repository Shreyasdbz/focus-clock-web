/** @format */

import React from "react";

export const NavBar = () => {
  return (
    <div className="w-full flex flex-row items-center justify-between fixed top-0 h-24 bg-white shadow-xl px-2">
      <div className="h-full flex items-center justify-center">Focus Clock</div>
      <div className="flex flex-row items-center justify-center">
        <div>ant</div>
        <div>acc</div>
      </div>
    </div>
  );
};

export default NavBar;
