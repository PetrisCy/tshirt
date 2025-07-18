import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logooo.png";
function Nav() {
  return (
    <div className="customBG text-white">
      <div className="flex flex-row justify-center lg:justify-between m-auto p-3 lg:max-w-[1400px]  w-full  px-8">
        <div className="flex flex-row gap-4">
          <a href="">
            <img src={logo} alt="logo" className="w-14 flex items-center " />
          </a>
          <h1>We dont just print, we create</h1>
        </div>

        <div className=" flex-row gap-4 w-1/3 hidden lg:flex">
          <NavLink to="/" className="hover:text-gray-400 border-r-2 px-5">
            Home
          </NavLink>
          <NavLink to="/about" className="hover:text-gray-400 border-r-2 px-5">
            About
          </NavLink>
          <NavLink
            to="/services"
            className="hover:text-gray-400 border-r-2 px-5"
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className="hover:text-gray-400 border-r-2 px-5"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Nav;
