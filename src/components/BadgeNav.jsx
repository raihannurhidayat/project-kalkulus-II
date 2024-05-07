import React from "react";

const BadgeNav = ({ title, classname }) => {
  return (
    <div
      className={`badge ${classname}`}
    >
      {title}
    </div>
  );
};

export default BadgeNav;
