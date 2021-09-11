import styled from "styled-components";
import { VFC } from "react";
type Props = {
  toggle: () => void;
};
export const ModalButton: VFC<Props> = (props) => {
  const { toggle } = props;
  return <SModalButton onClick={toggle}>＋</SModalButton>;
};
const SModalButton = styled.button`
  font-size: 50px;
  text-align: center;
  color: #fff;
  border-radius: 50%;
  line-height: 100px;
  width: 100px;
  height: 100px;
  padding: 0;
  position: fixed;
  right: 50px;
  bottom: 50px;
  cursor: pointer;
  transition: opacity 0.3s;
  background: linear-gradient(45deg, #288267 35%, #007bbb);
  :hover {
    color: #fff;
    opacity: 0.9;
  }
  @media (max-width: 768px) {
    font-size: 30px;
    width: 50px;
    height: 50px;
    line-height: 50px;
    right: 20px;
    bottom: 20px;
  }
`;
