import { ChangeEvent } from "react";
import { useAuth } from "../../hooks/useAuth";
import { userEmailState, userPasswordState } from "../../store/atom";
import styled from "styled-components";
import { useRecoilState } from "recoil";

export const Login = () => {
  const { fetchData } = useAuth();
  const [email, setEmail] = useRecoilState(userEmailState);
  const [password, setPassword] = useRecoilState(userPasswordState);
  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  return (
    <MainContainer>
      <WelcomeText>Welcome</WelcomeText>
      <InputContainer>
        <div>メールアドレス</div>
        <input
          type="text"
          placeholder="Email"
          onChange={onChangeEmail}
          value={email}
        />
        <div>パスワード</div>
        <input
          type="password"
          placeholder="Password"
          onChange={onChangePassword}
          value={password}
        />
      </InputContainer>
      <ButtonContainer>
        <button onClick={fetchData}>ボタン</button>
      </ButtonContainer>
    </MainContainer>
  );
};
const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
`;

const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
`;

const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
