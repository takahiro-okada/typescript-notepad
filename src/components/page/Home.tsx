/* eslint-disable import/no-duplicates */
// eslint-disable-next-line no-use-before-define
import React from "react";
import { useCallback, useEffect, useState } from "react";
import { useAllMemos } from "../../hooks/useAllMemos";
import { ModalButton } from "../atoms/ModalButton";
import { Modal } from "../molecules/Modal";
import { useModal } from "../../hooks/useModal";
import axios from "axios";
import { Memos } from "../../types/api/memos";
import styled from "styled-components";
import { Trash } from "@styled-icons/bootstrap/Trash";
import { Edit } from "@styled-icons/boxicons-regular/Edit";
import { useRecoilState } from "recoil";
import {
  titleState,
  categoryState,
  descriptionState,
  dateState,
} from "../../store/atom";

export const Home = () => {
  const { toggle, show, setShow } = useModal();
  const { fetchMemos, memos, setMemos } = useAllMemos();
  const [isEdit, setIsEdit] = useState(false);
  const apiUrl = "https://raisetech-memo-api.herokuapp.com/api/";
  const [title, setTitle] = useRecoilState(titleState);
  const [category, setCategory] = useRecoilState(categoryState);
  const [description, setDescription] = useRecoilState(descriptionState);
  const [date, setDate] = useRecoilState(dateState);
  const data = {
    title: title,
    category: category,
    description: description,
    date: date,
    // eslint-disable-next-line camelcase
    mark_div: 1,
  };
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
        const newMemos = [...memos];
        setMemos(newMemos);
        fetchMemos();
      })
      .catch((error) => {
        console.log(error.status);
      });
  }, []);
  // 編集ボタン
  const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    console.log(title);
  };
  const onChangeCategory = (event: any) => setCategory(event.target.value);
  const onChangeDescription = (event: any) =>
    setDescription(event.target.value);
  const onChangeDate = (date: any) => setDate(date);
  const editMemo = (id: any) => {
    setIsEdit(true);
  };
  const updateMemos = () => {
    setIsEdit(false);
  };
  const cancelUpdate = () => {
    setIsEdit(false);
  };
  useEffect(() => {
    fetchMemos();
  }, []);
  return (
    <>
      <SCardList>
        {memos.map((memo) => {
          const { id, title, category, date, description } = memo;
          return (
            <SMemoItem key={id}>
              <SMemoEdit>
                <Edit onClick={() => editMemo(id)} />
              </SMemoEdit>
              <SMemoTrash>
                <Trash onClick={() => deleteMemo(memo.id)} />
              </SMemoTrash>
              <SMemoWrapper>
                {isEdit ? (
                  <SEditMemoTitle
                    type="text"
                    value={title}
                    onChange={onChangeTitle}
                  />
                ) : (
                  <h2>{title}</h2>
                )}
                <SMemoMeta>
                  {isEdit ? (
                    <SEditMemo
                      type="text"
                      value={category}
                      onChange={onChangeCategory}
                    />
                  ) : (
                    <div>{category}</div>
                  )}
                  {isEdit ? (
                    <SEditMemo
                      type="text"
                      value={date}
                      onChange={onChangeDate}
                    />
                  ) : (
                    <div>{date}</div>
                  )}
                </SMemoMeta>
                {isEdit ? (
                  <SEditMemo
                    type="text"
                    value={description}
                    onChange={onChangeDescription}
                  />
                ) : (
                  <div>{description}</div>
                )}
                {isEdit ? (
                  <>
                    <SButtonUpdate onClick={updateMemos}>更新</SButtonUpdate>
                    <SButtonCancell onClick={cancelUpdate}>
                      キャンセル
                    </SButtonCancell>
                  </>
                ) : null}
              </SMemoWrapper>
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
const SEditMemoTitle = styled.input`
  font-size: 20px;
  display: inline-block;
  width: 100%;
  background-color: #fff;
  padding: 0.5rem 1rem;
  margin: 0.2rem;
`;

const SEditMemo = styled.input`
  display: inline-block;
  width: 100%;
  background-color: #fff;
  padding: 0.5rem 1rem;
  margin: 0.2rem;
`;
const SButtonUpdate = styled.button`
  margin: 0.2rem;
  display: inline-block;
  font-weight: bold;
  position: relative;
  padding: 0.5rem 1rem;
  color: #fff;
  border-radius: 10rem;
  border: none;
  background: linear-gradient(45deg, #288267 35%, #007bbb);
`;
const SButtonCancell = styled.button`
  margin: 0.2rem;
`;
const SMemoWrapper = styled.div`
  margin-top: 30px;
`;
