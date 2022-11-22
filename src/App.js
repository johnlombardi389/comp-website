import React from "react";
import { Routes, Route } from "react-router-dom";
// Pages
import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";
import Work from "./pages/Work";
import ContactUs from "./pages/ContactUs";
// Global style
import GlobalStyle from "./components/GlobalStyle";
import { About } from "./styles";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
