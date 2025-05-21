import { div } from "motion/react-client";
import React from "react";
import Nav from "./Nav";
import Footer from "./Footer"; // Import the Footer component

function Layout({ children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <header>
        <Nav />
      </header>
      <main style={{ flexGrow: '1' }}>{children}</main>
      <Footer /> {/* Add the Footer component here */}
    </div>
  );
}

export default Layout;
