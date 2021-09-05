import { VFC } from "react";
import styled from "styled-components";
import IconModalClose from "../../images/icon-modalclose.png";

type Props = {
  toggle: () => void;
};

export const ModalCloseButton: VFC<Props> = (props) => {
  const { toggle } = props;
  return (
    <SModalCloseButton onClick={toggle}>
      <img src={IconModalClose} alt="Close" />
    </SModalCloseButton>
  );
};
const SModalCloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
`;
