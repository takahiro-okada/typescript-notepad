import { ChangeEvent } from "react";
import { Toaster } from "react-hot-toast";
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
        <SLoginLabel>メールアドレス</SLoginLabel>
        <SLoginInput
          type="text"
          placeholder="Email"
          onChange={onChangeEmail}
          value={email}
        />
        <SLoginLabel>パスワード</SLoginLabel>
        <SLoginInput
          type="password"
          placeholder="Password"
          onChange={onChangePassword}
          value={password}
          autoComplete="off"
        />
        <Toaster />
      </InputContainer>
      <ButtonContainer>
        <SLoginButton onClick={fetchData}>ログイン</SLoginButton>
      </ButtonContainer>
    </MainContainer>
  );
};
const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  margin: 30px auto 0;
  color: #333;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  padding: 3rem;
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
const SLoginLabel = styled.div`
  font-size: 24px;
  line-height: 2;
  width: 100%;
  padding: 2px 10px;
`;
const SLoginInput = styled.input`
  font-weight: bold;
  background-color: #c4c4c4;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  font-size: 24px;
  line-height: 2;
  width: 100%;
  padding: 2px 10px;
  border-radius: 20px;
`;
const SLoginButton = styled.button`
  display: inline-block;
  font-weight: bold;
  position: relative;
  padding: 1rem 3rem;
  color: #fff;
  border-radius: 10rem;
  border: none;
  background: linear-gradient(45deg, #288267 35%, #007bbb);
  :hover {
    color: #fff;
    opacity: 0.9;
  }
`;
