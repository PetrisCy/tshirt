import React from "react";
import { NavLink } from "react-router-dom";
function Nav() {
  return (
    <div className="bg-gray-900 text-white">
      <div className="flex flex-row justify-center lg:justify-between container m-auto p-4   w-2/3">
        <div className="flex flex-row gap-4">
          <a href="">LOGO</a>
          <h1>We dont just print, we create</h1>
        </div>

        <div className=" flex-row justify-between w-1/3 hidden lg:flex">
          <NavLink to="/" className="hover:text-gray-400">
            Home
          </NavLink>
          <NavLink to="/about" className="hover:text-gray-400">
            About
          </NavLink>
          <NavLink to="/services" className="hover:text-gray-400">
            Services
          </NavLink>
          <a href="">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Nav;
