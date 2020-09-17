import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { useDataLayerValue } from "../providers/DataLayer";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Playlist from "../pages/Playlist/Playlist";

const Routes = ({ spotify }) => {
  const [{ token }] = useDataLayerValue();

  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() =>
          token ? <Redirect to="/home" /> : <Redirect to="/login" />
        }
      />
      <Route path="/login" component={Login} />
      <Route path="/home" component={() => <Home spotify={spotify} />} />
      <Route
        path="/playlist"
        component={() => <Playlist spotify={spotify} />}
      />
    </Switch>
  );
};

export default Routes;
