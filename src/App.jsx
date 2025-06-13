import { use, useEffect } from "react";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Sections from "./components/Sections";
import Lenis from "lenis";
import Layout from "./components/Layout";
import { HashRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Services from "./components/Services";
import Test from "./components/test";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Sections />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route
          path="/contact"
          element={
            <>
              <Hero />
              <Test />
            </>
          }
        />
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </Layout>
  );
}

export default App;
