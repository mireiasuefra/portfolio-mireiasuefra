import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import AboutMe from "./components/about-me/AboutMe";
import ContactMe from "./components/contact-me/ContactMe";
import LandingPage from "./components/landing-page/LandingPage";
import NavMenu from "./components/nav-menu/NavMenu";
import ProyectList from "./components/proyect-list/ProyectList";

function App() {
  return (
    <div className="body">
      <NavMenu />
      <main className="main">
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/about-me" element={<AboutMe/>} />
          <Route path="/my-projects" element={<ProyectList/>} />
          <Route path="/contact-me" element={<ContactMe/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
