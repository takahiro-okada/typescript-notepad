import { useCallback } from "react";
import { useAllMemos } from "../../hooks/useAllMemos";
import axios from "axios";
import { Memos } from "../../types/api/memos";
import styled from "styled-components";

export const Home = () => {
  const { fetchMemos, memos } = useAllMemos();
  const apiUrl = "https://raisetech-memo-api.herokuapp.com/api/";
  const data = {
    id: "string",
    title: "string",
    category: "string",
    date: "string",
    description: "string",
    // eslint-disable-next-line camelcase
    mark_div: 1,
  };
  const addMemos: any = useCallback(() => {
    axios
      .post<Array<Memos>>(`${apiUrl}memos`, data)
      .then((response) => {
        console.log("response data:", data);
        console.log("response body:", response);
      })
      .catch((error) => {
        console.log(error.status);
      });
  }, []);
  fetchMemos();
  return (
    <>
      <ScardList>
        {memos.map((memo, index) => {
          return (
            <>
              <li key={index}>
                <h2>{memo.title}</h2>
                <div>{memo.category}</div>
                <div>{memo.date}</div>
                <div>{memo.description}</div>
              </li>
            </>
          );
        })}
      </ScardList>
      <button onClick={addMemos}>button</button>
    </>
  );
};
const ScardList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
`;
