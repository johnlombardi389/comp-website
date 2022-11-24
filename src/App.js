import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
//Animation
import { AnimatePresence } from "framer-motion";
// Pages
import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";
import Destinations from "./pages/Destinations";
import ContactUs from "./pages/ContactUs";
// Style
import GlobalStyle from "./components/GlobalStyle";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AboutUs />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
