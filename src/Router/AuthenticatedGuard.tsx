import { useAuth } from "../hooks/useAuth";
import { FC, useEffect } from "react";
import { Redirect, useLocation } from "react-router-dom";

export const AuthenticatedGuard: FC = ({ children }) => {
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const location = useLocation();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);
  return isAuthenticated ? (
    <>{children}</>
  ) : (
    <Redirect
      to={{
        pathname: "/login",
        state: { from: location },
      }}
    />
  );
};
