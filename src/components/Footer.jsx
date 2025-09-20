import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

function Footer() {
  return (
    <footer className="customBG text-white py-6">
      <div className="container mx-auto flex flex-col items-center">
        {/* Social Links */}
        <div className="flex space-x-6 mb-4">
          <a
            href="https://www.facebook.com/Movedigitalprinting"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href="https://www.instagram.com/movedigitalprinting/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors"
          >
            <FaInstagram size={24} />
          </a>

          <a
            href="mailto:design@move-dp.com"
            className="hover:text-red-500 transition-colors"
          >
            <MdOutlineEmail size={26} />
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-sm text-white">
          © {new Date().getFullYear()} Move Digital Printing. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
