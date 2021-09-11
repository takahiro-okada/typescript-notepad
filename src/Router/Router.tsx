import { Switch, Route } from "react-router-dom";
import { VFC } from "react";
import { Header } from "../components/organisms/Header";
import { Login } from "../components/page/Login";
import { AuthenticatedRoute } from "./AuthenticatedRoute";
import { RecoilRoot } from "recoil";
import { AuthenticatedGuard } from "./AuthenticatedGuard";
import { About } from "../components/page/About";
import styled from "styled-components";

export const Router: VFC = () => {
  return (
    <>
      <RecoilRoot>
        <Header />
        <SContainer>
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/about" exact component={About} />
            <AuthenticatedGuard>
              <AuthenticatedRoute />
            </AuthenticatedGuard>
          </Switch>
        </SContainer>
      </RecoilRoot>
    </>
  );
};
const SContainer = styled.div`
  max-width: 980px;
  width: 100%;
  margin: 0 auto;
  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;
