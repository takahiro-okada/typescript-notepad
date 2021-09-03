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
      .post<Array<Memos>>(`${apiUrl}memos`, { body: data })
      .then((response) => {
        console.log("POST成功");
        console.log(response);
      })
      .catch((error) => {
        console.log(error.status);
      });
  }, []);
  fetchMemos();
  return (
    <>
      <SCardList>
        {memos.map((memo, index) => {
          return (
            <SMemoItem key={index}>
              <h2>{memo.title}</h2>
              <SMemoMeta>
                <div>{memo.category}</div>
                <div>{memo.date}</div>
              </SMemoMeta>
              <div>{memo.description}</div>
            </SMemoItem>
          );
        })}
      </SCardList>
      <button onClick={addMemos}>button</button>
    </>
  );
};
const SCardList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  padding: 0;
`;
const SMemoItem = styled.li`
  padding: 1.5em;
  overflow: hidden;
  box-shadow: 0 0.25rem 0.25rem hsla(0, 0%, 0%, 0.1);
  background-image: linear-gradient(
      180deg,
      rgba(115, 115, 115, 0.1) 2rem,
      rgba(255, 255, 255, 0) 2.5rem
    ),
    linear-gradient(180deg, rgb(255, 255, 179), rgb(255, 255, 179));
`;
const SMemoMeta = styled.div`
  display: flex;
  justify-content: space-between;
`;
