import React from "react";
import { Link } from "react-router-dom";

import imgSrc from "../img/icon.png";

import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="dashboard-navbar">
      <Link to="/" className="title flex items-center py-2 pl-3 pr-4 mb-4">
        <img src={imgSrc} alt="website-img" className="title-img mr-2" />
        <span className="title-text mr-auto">Inframodern</span>
        <span className="composed-icon flex flex-col justify-center">
          <RiArrowUpSLine className="up-icon -mb-1" />
          <RiArrowDownSLine className="-mt-1" />
        </span>
      </Link>
      <div className="list flex flex-col">
        <ul className="list-1 mb-auto">
          <li className="py-4 px-8">Home</li>
          <hr />
          <li className="py-4 px-8">Products data</li>
          <li className="py-4 px-8">Brands & Branches</li>
          <li className="py-4 px-8">Customers</li>
          <li className="active py-4 px-8">Users</li>
        </ul>

        <ul className="list-2">
          <li className="py-4 px-8">Settings</li>
          <li className="py-4 px-8">Notification & Updates</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
