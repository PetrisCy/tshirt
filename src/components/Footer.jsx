import React from 'react';
import './Footer.css'; // We'll create this file next for styling

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} My Awesome Company. All rights reserved.</p>
      <p>
        <a href="/about">About Us</a> | <a href="/contact">Contact</a> | <a href="/services">Services</a>
      </p>
    </footer>
  );
}

export default Footer;
