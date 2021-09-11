import styled from "styled-components";
import { VFC } from "react";
import { ModalCloseButton } from "../atoms/ModalCloseButton";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { format } from "date-fns";
import "react-day-picker/lib/style.css";
import {
  titleState,
  categoryState,
  descriptionState,
  dateState,
} from "../../store/atom";
import { useRecoilState } from "recoil";
type Props = {
  show: boolean;
  toggle: () => void;
  addMemos: () => void;
};
export const Modal: VFC<Props> = (props) => {
  const { toggle, show, addMemos } = props;
  const [title, setTitle] = useRecoilState(titleState);
  const [category, setCategory] = useRecoilState(categoryState);
  const [description, setDescription] = useRecoilState(descriptionState);
  const [, setDate] = useRecoilState(dateState);
  const onChangeTitle = (event: any) => setTitle(event.target.value);
  const onChangeCategory = (event: any) => setCategory(event.target.value);
  const onChangeDescription = (event: any) =>
    setDescription(event.target.value);
  const onChangeDate = (date: any) => setDate(format(date, "yyyy/MM/dd"));
  // 編集するとき
  if (show) {
    return (
      <>
        <SModalOverran>
          <SModalContent>
            <ModalCloseButton toggle={toggle} />
            <SModalBox>
              <SModalItem>
                <SModalTitle>メモ</SModalTitle>
                <SModalInput
                  placeholder="どんなメモ？"
                  value={title}
                  onChange={onChangeTitle}
                />
              </SModalItem>
              <SModalItem>
                <SModalTitle>どんなこと</SModalTitle>
                <SModalInput
                  placeholder="どんなこと"
                  value={category}
                  onChange={onChangeCategory}
                />
              </SModalItem>
              <SModalItem>
                <SModalTitle>いつまでにやる</SModalTitle>
                <DayPickerInput onDayChange={onChangeDate} />
              </SModalItem>
              <SModalItem>
                <SModalTitle>内容</SModalTitle>
                <SModalTextArea
                  placeholder="どんな内容？"
                  value={description}
                  onChange={onChangeDescription}
                />
              </SModalItem>
              <SModalSend onClick={addMemos}>POST</SModalSend>
            </SModalBox>
          </SModalContent>
        </SModalOverran>
      </>
    );
  } else {
    return null;
  }
};
const SModalContent = styled.div`
  position: relative;
  z-index: 2;
  width: 50%;
  padding: 1em;
  background: #fff;
  @media (max-width: 768px) {
    width: 95%;
  }
`;
const SModalOverran = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SModalBox = styled.div`
  padding: 60px 30px;
  @media (max-width: 768px) {
    padding: 5px;
  }
`;
const SModalItem = styled.div`
  margin-top: 20px;
`;
const SModalTitle = styled.p`
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 0.1em; ;
`;
const SModalInput = styled.input`
  font-weight: bold;
  background-color: #c4c4c4;
  font-size: 24px;
  line-height: 2;
  width: 100%;
  padding: 2px 10px;
`;

const SModalTextArea = styled.textarea`
  resize: vertical;
  font-weight: bold;
  background-color: #c4c4c4;
  font-size: 24px;
  line-height: 2;
  width: 100%;
  padding: 2px 10px;
`;
const SModalSend = styled.button`
  display: block;
  margin-top: 30px;
  margin-left: auto;
  max-width: 200px;
  text-align: center;
  font-weight: bold;
  font-size: 24px;
  line-height: 2;
  width: 100%;
  padding: 2px 10px;
  color: #fff;
  background: linear-gradient(45deg, #288267 35%, #007bbb);
  :hover {
    color: #fff;
    opacity: 0.9;
  }
`;
