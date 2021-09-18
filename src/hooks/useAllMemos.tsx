/* eslint-disable array-callback-return */
import axios from "axios";
import { useCallback, useState } from "react";
import { Memos } from "../types/api/memos";
export const useAllMemos = () => {
  const [memos, setMemos] = useState<Array<Memos>>([]);
  const apiUrl = "https://raisetech-memo-api.herokuapp.com/api/";
  const token = localStorage.getItem("token");
  const fetchMemos: any = useCallback(() => {
    axios
      .get<Array<Memos>>(`${apiUrl}memos`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      })
      .then((result) => {
        // console.log(result.data);
        // const newList = [...result.data, { isEdit: false }];
        // console.log(newList);
        result.data.map((element) => {
          const test = [element, { isEdit: false }];
          console.log(test);
        });
      })
      .catch((error) => {
        console.log(error.status);
      });
  }, []);
  return { fetchMemos, setMemos, memos };
};
