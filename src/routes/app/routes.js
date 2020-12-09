import React from "react";
import { Route, Switch } from "react-router-dom";

import Dashboard from "../../pages/Dashboard";

const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/dashboard" component={Dashboard} exact />
    </Switch>
  );
};

export default AppRoutes;
