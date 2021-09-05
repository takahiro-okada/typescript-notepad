import { useCallback, useEffect } from "react";
import { useAllMemos } from "../../hooks/useAllMemos";
import { ModalButton } from "../atoms/ModalButton";
import { Modal } from "../molecules/Modal";
import { useModal } from "../../hooks/useModal";
import axios from "axios";
import { Memos } from "../../types/api/memos";
import styled from "styled-components";
import { Trash } from "@styled-icons/bootstrap/Trash";
import { Edit } from "@styled-icons/boxicons-regular/Edit";
import { useRecoilValue } from "recoil";
import {
  titleState,
  categoryState,
  descriptionState,
  dateState,
} from "../../store/atom";

export const Home = () => {
  const { toggle, show, setShow } = useModal();
  const { fetchMemos, memos, setMemos } = useAllMemos();
  const apiUrl = "https://raisetech-memo-api.herokuapp.com/api/";
  const title = useRecoilValue(titleState);
  const category = useRecoilValue(categoryState);
  const description = useRecoilValue(descriptionState);
  const date = useRecoilValue(dateState);
  const data = {
    title: title,
    category: category,
    description: description,
    date: date,
    // eslint-disable-next-line camelcase
    mark_div: 1,
  };
  console.log(data);
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };
  // メモを追加する
  const addMemos: any = useCallback(() => {
    axios
      .post<Array<Memos>>(`${apiUrl}memo`, data, config)
      .then((response) => {
        const arr = JSON.parse(response.config.data);
        const newMemos = [...memos, arr];
        setMemos(newMemos);
        setShow(false);
      })
      .catch((error) => {
        console.log(error.status);
      });
  }, [setMemos, memos, data]);
  // メモを削除する
  const deleteMemo: any = useCallback((index: any) => {
    axios
      .delete<Array<Memos>>(`${apiUrl}memo/` + index, config)
      .then((response) => {
        console.log(response);
        const newMemos = [...memos];
        setMemos(newMemos);
        fetchMemos();
      })
      .catch((error) => {
        console.log(error.status);
      });
  }, []);
  useEffect(() => {
    fetchMemos();
  }, []);
  return (
    <>
      <SCardList>
        {memos.map((memo, index) => {
          return (
            <SMemoItem key={index}>
              <SMemoTrash>
                <Trash onClick={() => deleteMemo(memo.id)} />
              </SMemoTrash>
              <SMemoEdit>
                <Edit onClick={() => deleteMemo(memo.id)} />
              </SMemoEdit>
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
      <ModalButton toggle={toggle} />
      <Modal show={show} toggle={toggle} addMemos={addMemos} />
    </>
  );
};
const SCardList = styled.ul`
  margin: 60px auto;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  padding: 0;
`;
const SMemoItem = styled.li`
  position: relative;
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
const SMemoTrash = styled.div`
  cursor: pointer;
  width: 25px;
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  &:hover {
    opacity: 0.8;
    zoom: 1.02;
  }
`;
const SMemoEdit = styled.div`
  cursor: pointer;
  width: 25px;
  position: absolute;
  left: 0.5rem;
  top: 0.5rem;
  &:hover {
    opacity: 0.8;
    zoom: 1.02;
  }
`;
