import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid var(--gray);
  display: flex;
  background: var(--white);
  padding: 0 20px;
`;
export const Wrapper = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 570px) {
    justify-content: center;
  }
`;
export const NavLogo = styled.div`
  display: flex;
  align-items: center;
  > div {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--orange);
    font-family: "Nunito";
    font-size: 17px;
    font-weight: 900;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    box-shadow: 0 0 5px 1px rgba(255, 93, 0, 1);
  }
  span {
    font-family: "Nunito";
    font-size: 20px;
    font-weight: 900;
    margin-left: 10px;
  }
  > img {
    width: 150px;
    height: 40px;
    object-fit: contain;
  }
`;
