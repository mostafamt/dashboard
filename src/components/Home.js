import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link> <br />
          <Link to="/dashboard2">Dashboard 2</Link> <br />
          <Link to="/dashboard3">Dashboard 3</Link> <br />
          <Link to="/dashboard4">Dashboard 4</Link> <br />
        </li>
      </ul>
    </div>
  );
};

export default Home;
