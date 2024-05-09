import React from "react";

const BadgeNav = ({ title, classname, setDisplay, display, setDeret, setTemp }) => {
  return (
    <div
      className={`badge ${classname} ${display === title ? "isActive": ""}`}
      onClick={() => {
        setDisplay(title.toLowerCase())
        setDeret([])
        setTemp("")
      }}
    >
      {title}
    </div>
  );
};

export default BadgeNav;
