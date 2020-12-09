import React from "react";
import { Redirect } from "react-router-dom";
import { useAuth } from "../contexts/auth";

import RoutesApp from "../routes/app/routes";
import RoutesAuth from "../routes/auth/routes";

const Routes = () => {
  const { signed } = useAuth();

  return (
    <>
      {signed && (
        <>
          <Redirect from="/" to="/dashboard" />
          <RoutesApp />
        </>
      )}
      {!signed && (
        <>
          <Redirect from="/" to="/signin" />
          <RoutesAuth />
        </>
      )}
    </>
  );
};

export default Routes;
