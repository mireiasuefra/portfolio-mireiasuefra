import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavMenu.scss";
import BurguerButton from "../burguer-button/BurguerButton";

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
          <Link className="menu-nav__link" to="/" onClick={handleClick}>
            Home
          </Link>
          <Link className="menu-nav__link" to="/about-me" onClick={handleClick}>
            About me
          </Link>
          <Link
            className="menu-nav__link"
            to="/my-projects"
            onClick={handleClick}
          >
            My projects
          </Link>
          <Link
            className="menu-nav__link"
            to="/contact-me"
            onClick={handleClick}
          >
            Contact me
          </Link>
        </div>
      </div>
      <BurguerButton clicked={clicked} handleClick={handleClick} />
    </div>
  );
}

export default NavMenu;
