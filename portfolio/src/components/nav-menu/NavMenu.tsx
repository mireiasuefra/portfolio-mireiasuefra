import React, { useState } from "react";
import "./NavMenu.scss";
import BurguerButton from "../burguerButton/BurguerButton";

interface NavMenuProps {}

function NavMenu(props: NavMenuProps) {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <div className="menu">
      <div className={`menu-background ${clicked ? "active" : ""}`}>
        <div className="menu-nav">
          <a className="menu-nav__link" href="/?">
            About me
          </a>
          <a className="menu-nav__link" href="/?">
            My projects
          </a>
          <a className="menu-nav__link" href="/?">
            Contact me
          </a>
        </div>
      </div>
      <BurguerButton clicked={clicked} handleClick={handleClick} />
    </div>
  );
}

export default NavMenu;
