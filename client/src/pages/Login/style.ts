import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 60px);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 370px;
  width: 100%;
  border: 1px solid var(--gray);
  background: var(--white);
  padding: 30px 60px;
  position: relative;
  > h1,
  > p,
  > a {
    width: 100%;
    text-align: center;
  }
  > h1 {
    font-size: 26px;
  }
  > p {
    margin-top: 10px;
    font-size: 13px;
  }
  > a {
    font-size: 14px;
    text-decoration: underline;
    &:hover {
      text-decoration: none;
    }
  }
`;

export const RegisterLink = styled(Link)``;

export const LoginForm = styled.form`
  /* border: 1px solid red; */
  margin-top: 10px;
  > p {
    margin-top: 20px;
    font-size: 14px;
    a {
      text-decoration: underline;
      &:hover {
        text-decoration: none;
      }
    }
  }
  strong {
    color: red;
    font-size: 13px;
  }
`;

export const LoginInput = styled.input`
  margin-top: 10px;
  width: 100%;
  height: 40px;
  border: 1px solid var(--gray);
  background: var(--white);
  padding: 3px 10px;
  font-size: 15px;
  font-weight: 600;
  &.error {
    border: 1px solid red;
    color: red;
    &::placeholder {
      color: red;
    }
  }
`;

export const CheckWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  > label {
    margin-left: 10px;
  }
`;
export const LoginCheckBox = styled.input``;

export const LoginButton = styled.button`
  margin-top: 20px;
  border: 1px solid red;
  width: 100%;
  background: var(--orange);
  color: var(--white);
  padding: 5px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  &:disabled {
    background: var(--gray_bg);
    color: #000;
  }
`;
export const SpinnerPos = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;
