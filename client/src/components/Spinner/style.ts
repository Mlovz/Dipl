import styled, { keyframes } from "styled-components";

const animSpinner = keyframes`
    100%{
        transform: rotate(360deg);
    }
`;

export const Container = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 4px solid var(--gray);
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: -4px;
    right: -4px;
    width: 100%;
    height: 100%;
    border: 4px solid transparent;
    border-top: 4px solid var(--orange);
    border-radius: 50%;
    animation: ${animSpinner} 0.6s linear infinite;
  }
`;
