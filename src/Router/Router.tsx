import { Switch, Route } from "react-router-dom";
import { VFC } from "react";
import { Header } from "../components/organisms/Header";
import { Login } from "../components/page/Login";
import { AuthenticatedRoute } from "./AuthenticatedRoute";
import { RecoilRoot } from "recoil";
import { AuthenticatedGuard } from "./AuthenticatedGuard";
import { About } from "../components/page/About";
export const Router: VFC = () => {
  return (
    <>
      <RecoilRoot>
        <Header />
        <div>
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/about" exact component={About} />
            <AuthenticatedGuard>
              <AuthenticatedRoute />
            </AuthenticatedGuard>
          </Switch>
        </div>
      </RecoilRoot>
    </>
  );
};
