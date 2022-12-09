import { Box } from "@mui/material";
import React from "react";
import Content from "./Content";
import Header from "./Header";
import Navbar from "./Navbar";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Navbar />
      <Header />
      <Content />
    </div>
  );
};

export default Dashboard;
