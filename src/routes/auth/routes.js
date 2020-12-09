import React from "react";
import { Route, Switch } from "react-router-dom";

import SignIn from "../../pages/Signin";

const AuthRoutes = () => {
  return (
    <Switch>
      <Route path="/signin" component={SignIn} exact />
    </Switch>
  );
};

export default AuthRoutes;
