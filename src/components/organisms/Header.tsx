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
  @media (max-width: 768px) {
    padding: 10px;
  }
`;
const SHeaderLogo = styled(Link)`
  color: #333;
  font-size: 32px;
  text-decoration: none;
  @media (max-width: 768px) {
  }
`;
const SHeaderNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SHeaderList = styled.ul`
  display: flex;
`;
const SHeaderItem = styled(Link)`
  color: #333;
  text-decoration: none;
  padding: 0.5rem 2rem;
  :hover {
    opacity: 0.7;
  }
  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
  }
`;
const SButton = styled.button`
  display: inline-block;
  font-weight: bold;
  position: relative;
  padding: 0.5rem 2rem;
  color: #fff;
  border-radius: 10rem;
  border: none;
  background: linear-gradient(45deg, #288267 35%, #007bbb);
  :hover {
    color: #fff;
    opacity: 0.9;
  }
  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;
