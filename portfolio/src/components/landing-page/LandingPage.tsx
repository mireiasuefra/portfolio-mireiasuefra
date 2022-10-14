import "./LandingPage.scss";
import React from "react";

//import { ejemplo } from "./../../types/ejemplo";

interface LandingPageProps {}

function LandingPage(props: LandingPageProps) {
  return (
    <div className="landing">
      <div className="landing__triangle"></div>
      <div className="landing__transition">
        <h1 className="landing__title">Hello World!!</h1>
        <h2 className="landing__subtitle">
          I am Mireia Suero and I am Junior Developer
        </h2>
      </div>
    </div>
  );
}

export default LandingPage;
