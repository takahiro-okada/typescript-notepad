import { Route, Switch } from "react-router-dom";
import { VFC } from "react";
import { Home } from "../components/page/Home";
import { About } from "../components/page/About";

export const AuthenticatedRoute: VFC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
    </Switch>
  );
};
