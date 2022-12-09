import React from "react";

import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";

import Header from "./Header";
import Navbar from "./Navbar";
import Content from "./Content";
import Drawer from "./Drawer";
import Main from "./Main";

const Dashboard = () => {
  const [open, setOpen] = React.useState(
    window.innerWidth < 900 ? false : true
  );
  const [transformValue, setTransformValue] = React.useState(
    window.innerWidth < 900 ? 0 : 300
  );

  const clickHandler = () => {
    setOpen((prevState) => !prevState);
  };

  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 900) {
        setTransformValue(0);
      } else {
        setTransformValue(300);
      }
    }

    window.addEventListener("resize", handleResize);
  });

  return (
    <div className="overflow-x-hidden">
      <button
        className="btn-free"
        onClick={clickHandler}
        style={
          open
            ? { transform: `translateX(0)` }
            : { transform: "translateX(-300px)" }
        }
      >
        {open ? (
          <RiArrowLeftSLine className="right-arrow-icon" />
        ) : (
          <RiArrowRightSLine className="right-arrow-icon" />
        )}
      </button>
      <Drawer
        open={open}
        transformValue={transformValue}
        clickHandler={clickHandler}
      >
        <Navbar />
      </Drawer>
      <Main
        open={open}
        transformValue={transformValue}
        clickHandler={clickHandler}
      >
        <Header open={open} transformValue={transformValue} />
        <Content open={open} transformValue={transformValue} />
      </Main>
    </div>
  );
};

export default Dashboard;
