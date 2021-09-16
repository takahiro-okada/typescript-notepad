import { Route, Switch } from "react-router-dom";
import { VFC } from "react";
import { Home } from "../components/page/Home";

export const AuthenticatedRoute: VFC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  );
};
