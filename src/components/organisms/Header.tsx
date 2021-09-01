import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import styled from "styled-components";

export const Header = () => {
  const history = useHistory();
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const login = () => {
    history.push("/login");
  };
  const logout = () => {
    setIsAuthenticated(false);
    localStorage.clear();
    history.push("/login");
  };
  console.log(isAuthenticated);
  return (
    <SHeader>
      <SHeaderNav>
        <SHeaderLogo to={{ pathname: "/" }}>nPad</SHeaderLogo>
        <SHeaderList>
          {isAuthenticated ? (
            <SHeaderItem to={{ pathname: "/" }}>付箋</SHeaderItem>
          ) : null}
          <SHeaderItem to={{ pathname: "/about" }}>nPadについて</SHeaderItem>
          {isAuthenticated ? (
            <SButton onClick={logout}>ログアウト</SButton>
          ) : (
            <SButton onClick={login}>ログイン</SButton>
          )}
        </SHeaderList>
      </SHeaderNav>
    </SHeader>
  );
};
const SHeader = styled.div`
  background-color: #fcdd0b;
  padding: 10px 60px;
`;
const SHeaderLogo = styled(Link)`
  font-family: "Staatliches", cursive;
  color: #fff;
  font-size: 32px;
`;
const SHeaderNav = styled.nav`
  display: flex;
  justify-content: space-between;
`;
const SHeaderList = styled.ul`
  display: flex;
`;
const SHeaderItem = styled(Link)`
  color: #fff;
`;
const SButton = styled.button`
  color: #fff;
`;
