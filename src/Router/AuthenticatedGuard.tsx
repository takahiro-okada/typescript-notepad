import { useAuth } from "../hooks/useAuth";
import { FC } from "react";
import { Redirect, useLocation } from "react-router-dom";

export const AuthenticatedGuard: FC = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
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
