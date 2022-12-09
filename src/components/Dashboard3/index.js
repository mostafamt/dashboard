import React from "react";
// import "./style.css";

import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";

const Index = () => {
  const [open, setOpen] = React.useState(false);
  const [transformValue] = React.useState(300);

  const clickHandler = () => {
    setOpen((prevState) => !prevState);
    console.log("clicked");
  };

  return (
    <div style={{ overflowX: "hidden" }}>
      <nav
        id="drawer"
        style={
          open
            ? { transform: `translateX(${transformValue}px)` }
            : { transform: "translateX(0px)" }
        }
      >
        <ul>
          <li>
            <a href="#">Menu Item</a>
          </li>
          <li>
            <a href="#">Menu Item</a>
          </li>
          <li>
            <a href="#">Menu Item</a>
          </li>
          <li>
            <a href="#">Menu Item</a>
          </li>
        </ul>
        <button className="btn-left" onClick={clickHandler}>
          {open ? (
            <RiArrowLeftSLine className="right-arrow-icon" />
          ) : (
            <RiArrowRightSLine className="right-arrow-icon" />
          )}
        </button>
      </nav>
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
        <p>Page Content</p>
        <p>Page Content</p>
        <p>Page Content</p>
        <p>Page Content</p>
        <p>Page Content</p>
        <p>Page Content</p>
        <p>Page Content</p>
        <p>Page Content</p>
        <p>Page Content</p>
        <p>Page Content</p>
        <p>Page Content</p>
        <p>Page Content</p>
        <p>Page Content</p>
        <p>Page Content</p>
        <p>Page Content</p>
        <p>Page Content</p>
        <br />
      </div>
    </div>
  );
};

export default Index;
