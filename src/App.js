import React from "react";
// Pages
import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";
// Global style
import GlobalStyle from "./components/GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AboutUs />
    </div>
  );
}

export default App;
