import React from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBox";

const Home = ({ user, onLogout }) => {
  return (
    <>
      <TopBar user={user} onLogout={onLogout} />
      <Dashboard />
    </>
  );
};

export default Home;
