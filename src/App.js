import React from "react";
// Pages
import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";
import Work from "./pages/Work";
import ContactUs from "./pages/ContactUs";
// Global style
import GlobalStyle from "./components/GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Route path="/">
        <AboutUs />
      </Route>
      <Route path="/work">
        <Work />
      </Route>
      <Route path="/contact">
        <ContactUs />
      </Route>
    </div>
  );
}

export default App;
