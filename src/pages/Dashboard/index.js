import React from "react";

import { useAuth } from "../../contexts/auth";

const Dashboard = () => {
  const { signOut } = useAuth();

  return (
    <>
      <div>Here goes some title</div>
      <hr />
      <button onClick={() => signOut()}>LogOut</button>
    </>
  );
};

export default Dashboard;
