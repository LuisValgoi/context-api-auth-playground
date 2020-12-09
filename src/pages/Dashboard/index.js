import React from "react";

import { useAuth } from "../../contexts/auth";

const Dashboard = () => {
  const { user, signOut } = useAuth();

  return (
    <>
      <span>Hello, {user.name ? user.name : "N/A"}</span>
      <hr />
      <button onClick={() => signOut()}>LogOut</button>
    </>
  );
};

export default Dashboard;
