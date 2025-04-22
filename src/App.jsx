import { use, useEffect } from "react";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Sections from "./components/Sections";
import Lenis from "lenis";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Services from "./components/Services";

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
    <Router basename="/tshirt">
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
          <Route path="/contact" element={<Sections />} />
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
