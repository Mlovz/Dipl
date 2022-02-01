import styled from "styled-components";

interface Props {
  outlined?: boolean;
  pd?: number;
  bdR?: number;
}

export default styled.button<Props>`
  background: ${(props) => (props.outlined ? `#fff` : "var(--orange)")};
  color: ${(props) => (props.outlined ? "var(--orange)" : "#fff")};
  border: ${(props) => (props.outlined ? `1px solid var(--orange)` : "none")};
  padding: ${(props) => props.pd && props.pd + "px"};
  border-radius: ${(props) => props.bdR && props.bdR + "px"};
  font-family: "Nunito";
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  outline: 0;
  /* &:hover {
    background: ${(props) =>
    props.outlined ? "var(--twitter)" : "var(--twitter-light-hover)"};
    color: ${(props) => (props.outlined ? "var(--primary)" : "var(--primary)")};
  } */
`;
