import React from "react";

const Main = ({ open, transformValue, clickHandler, children }) => {
  return (
    <div
      id="page-content"
      style={
        open
          ? { transform: `translateX(${transformValue}px)` }
          : { transform: "translateX(0px)" }
      }
    >
      <button className="btn-right" onClick={clickHandler}>
        ok
      </button>
      <div>{children}</div>
    </div>
  );
};

export default Main;
