import { div } from "motion/react-client";
import React from "react";
import Nav from "./Nav";
import Footer from "./Footer"; // Import the Footer component

function Layout({ children }) {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>{children}</main>
      <Footer /> {/* Add the Footer component here */}
    </div>
  );
}

export default Layout;
