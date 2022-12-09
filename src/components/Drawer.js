import React from "react";

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
      {children}
    </nav>
  );
};

export default Drawer;
