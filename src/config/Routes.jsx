import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import { Catalog } from "../pages/Catalog";
import Details from "../pages/detail/Details";

export default function Routes() {
  return (
    <Switch>
      <Route path="/:category/search/:keyword" component={Catalog} />
      <Route path="/:category/:id" component={Details} />
      <Route path="/:category" component={Catalog} />
      <Route path="/" exact component={Home} />
    </Switch>
  );
}
