import axios from "axios";
import { useRecoilValue, useRecoilState } from "recoil";
import { useHistory } from "react-router-dom";

import {
  userEmailState,
  userPasswordState,
  isAuthenticatedState,
} from "../store/atom";

export const useAuth = () => {
  const email = useRecoilValue(userEmailState);
  const password = useRecoilValue(userPasswordState);
  const apiUrl = "https://raisetech-memo-api.herokuapp.com/api/";
  const history = useHistory();
  const [isAuthenticated, setIsAuthenticated] =
    useRecoilState<boolean>(isAuthenticatedState);
  const fetchData = () => {
    axios
      .post(`${apiUrl}login`, {
        email: email,
        password: password,
      })
      .then((results) => {
        const token = results.data.access_token;
        setIsAuthenticated(true);
        console.log(isAuthenticated);
        localStorage.setItem("token", JSON.stringify(token));
        history.push("/");
      })
      .catch((error) => {
        console.log(error.status);
        alert("ログインできませんでした");
      });
  };
  return { fetchData, isAuthenticated, setIsAuthenticated };
};
