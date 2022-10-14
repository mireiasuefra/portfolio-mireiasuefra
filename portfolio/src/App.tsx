import React from "react";
import "./App.scss";
import LandingPage from "./components/landing-page/LandingPage";
import NavMenu from "./components/nav-menu/NavMenu";

function App() {
  return (
    <div className="body">
      <NavMenu/>
      <LandingPage />
      <main className="main"></main>
    </div>
  );
}

export default App;
