import React from "react";

import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";

const Drawer = ({ open, transformValue, clickHandler, children }) => {
  return (
    <nav
      className="drawer px-4 py-8 pb-16 text-typo"
      style={
        open
          ? { transform: `translateX(${transformValue}px)` }
          : { transform: "translateX(0px)" }
      }
    >
      <button className="btn-left" onClick={clickHandler}>
        {open ? (
          <RiArrowLeftSLine className="right-arrow-icon" />
        ) : (
          <RiArrowRightSLine className="right-arrow-icon" />
        )}
      </button>
      {children}
    </nav>
  );
};

export default Drawer;
