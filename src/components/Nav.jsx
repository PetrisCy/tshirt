// import React from "react";
// import { NavLink } from "react-router-dom";
// import logo from "../assets/logooo.png";
// function Nav() {
//   return (
//     <div className="customBG text-white">
//       <div className="flex flex-row justify-center lg:justify-between m-auto p-3 lg:max-w-[1400px]  w-full  px-8">
//         <div className="flex flex-row gap-4">
//           <a href="">
//             <img src={logo} alt="logo" className="w-14 flex items-center " />
//           </a>
//           <h1>We dont just print, we create</h1>
//         </div>

//         <div className=" flex-row gap-4 w-1/3 hidden lg:flex">
//           <NavLink to="/" className="hover:text-gray-400 border-r-2 px-5">
//             Home
//           </NavLink>
//           <NavLink to="/about" className="hover:text-gray-400 border-r-2 px-5">
//             About
//           </NavLink>
//           <NavLink
//             to="/services"
//             className="hover:text-gray-400 border-r-2 px-5"
//           >
//             Services
//           </NavLink>
//           <NavLink
//             to="/contact"
//             className="hover:text-gray-400 border-r-2 px-5"
//           >
//             Contact
//           </NavLink>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logooo.png";

function Nav() {
  const [open, setOpen] = useState(false);

  const linkBase =
    "block px-5 py-3 hover:text-gray-300 lg:border-r-2 border-white/20";
  const getLinkClass = () => linkBase; // no yellow active state

  const closeMenu = () => setOpen(false);

  return (
    <header className="customBG text-white sticky top-0 z-50">
      <div className="flex flex-row items-center justify-between m-auto p-3 lg:max-w-[1400px] w-full px-4 lg:px-8">
        {/* Left: Logo + tagline */}
        <div className="flex items-center gap-4">
          <NavLink to="/" onClick={closeMenu} className="inline-flex">
            <img src={logo} alt="logo" className="w-14" />
          </NavLink>
          <h1 className="sm:text-sm lg:text-base text-center items-center justify-center">
            We don’t just print, we create
          </h1>
        </div>

        {/* Desktop nav */}
        <nav className="hidden lg:flex flex-row gap-0 w-1/3 justify-end">
          <NavLink to="/" className={getLinkClass} end>
            Home
          </NavLink>
          <NavLink to="/about" className={getLinkClass}>
            About
          </NavLink>
          <NavLink to="/services" className={getLinkClass}>
            Services
          </NavLink>
          <NavLink to="/contact" className={`${linkBase} lg:border-r-0`}>
            Contact
          </NavLink>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="lg:hidden inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-white/60"
          onClick={() => setOpen((v) => !v)}
        >
          {/* Icon */}
          <span className="relative w-6 h-6">
            <span
              className={`absolute left-0 top-1/2 w-6 h-[2px] bg-white transition-transform duration-300 ${
                open ? "rotate-45 -translate-y-[1px]" : "-translate-y-2"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 w-6 h-[2px] bg-white transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 w-6 h-[2px] bg-white transition-transform duration-300 ${
                open ? "-rotate-45 -translate-y-[1px]" : "translate-y-2"
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile menu (slide down) */}
      <div
        id="mobile-menu"
        className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="px-4 pb-4">
          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <NavLink
              to="/"
              end
              className="block px-5 py-3 hover:bg-white/10"
              onClick={closeMenu}
            >
              Home
            </NavLink>
            <div className="h-px bg-white/10" />
            <NavLink
              to="/about"
              className="block px-5 py-3 hover:bg-white/10"
              onClick={closeMenu}
            >
              About
            </NavLink>
            <div className="h-px bg-white/10" />
            <NavLink
              to="/services"
              className="block px-5 py-3 hover:bg-white/10"
              onClick={closeMenu}
            >
              Services
            </NavLink>
            <div className="h-px bg-white/10" />
            <NavLink
              to="/contact"
              className="block px-5 py-3 hover:bg-white/10"
              onClick={closeMenu}
            >
              Contact
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
