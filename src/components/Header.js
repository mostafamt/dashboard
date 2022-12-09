import React from "react";

import imgSrc from "../img/profile.jpg";
import { BsFillCaretDownFill } from "react-icons/bs";

const Header = ({ open, transformValue }) => {
  return (
    <div
      className="dashboard-header item"
      style={
        open
          ? { width: `calc( 100% - ${transformValue}px)` }
          : { width: "100%" }
      }
    >
      <div className="profile flex items-center place-content-end gap-2 p-4">
        <img src={imgSrc} alt="profile-pic" className="profile-img" />
        <p>Isalm alsultan</p>
        <BsFillCaretDownFill className="profile-icon mt-1" />
      </div>
    </div>
  );
};

export default Header;
