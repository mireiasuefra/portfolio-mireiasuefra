import "./BurguerButton.scss";
import React from "react";

interface BurguerButtonProps {
  handleClick: () => void;
  clicked: boolean;
}

function BurguerButton(props: BurguerButtonProps) {
  return (
    <div
      onClick={props.handleClick}
      className={`icon nav-icon-5 ${props.clicked ? "open" : ""}`}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default BurguerButton;
