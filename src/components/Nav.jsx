import React from "react";

function Nav() {
  return (
    <div className="bg-gray-900 text-white">
      <div className="flex flex-row justify-center lg:justify-between container m-auto p-4   w-2/3">
        <div className="flex flex-row gap-4">
          <a href="">LOGO</a>
          <h1>We dont just print, we create</h1>
        </div>

        <div className=" flex-row justify-between w-1/3 hidden lg:flex">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Services</a>
          <a href="">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Nav;
