import styled, { css } from "styled-components";
import {
  School,
  LibraryBooks,
  ErrorOutline,
  GridView,
  Add,
  Paid,
  KeyboardArrowDown,
  PersonOutline,
  PublishedWithChanges,
  Lock,
} from "../../../styles/icon";
import { Link } from "react-router-dom";
import Button from "../../Button";

export const Container = styled.div`
  display: flex;
  align-items: center;
  > a + a {
    margin-left: 40px;
  }
  @media (max-width: 570px) {
    position: fixed;
    bottom: 0;
    width: 100%;
    border-top: 1px solid var(--gray);
    justify-content: space-between;
    padding: 4px 20px;
    > a:last-child {
      display: none;
    }
  }
`;
export const NavLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  > svg {
  }
  > span {
    display: flex;
    margin-top: -4px;
    font-family: "Nunito";
    font-size: 16px;
    font-weight: 700;
    @media (max-width: 570px) {
      font-size: 14px;
    }
  }
  padding: 2px 10px;
  border-radius: 10px;
  transition: background 0.3s;
  &:hover,
  &.active {
    background: var(--gray_dark);
  }
`;

const iconCSS = css`
  width: min(25px, max(16px, 4vw));
  height: min(25px, max(16px, 4vw));
  fill: #000;
`;

export const SchoolIcon = styled(School)`
  ${iconCSS}
`;
export const HelpIcon = styled(ErrorOutline)`
  ${iconCSS}
`;
export const BlogIcon = styled(LibraryBooks)`
  ${iconCSS}
`;
export const ViewIcon = styled(GridView)`
  ${iconCSS}
`;

export const ArrowIcon = styled(KeyboardArrowDown)`
  margin-left: 10px;
`;

export const NavLogBtn = styled(Button)``;

export const NavProfile = styled.div`
  margin-left: 40px;
  display: flex;
  align-items: center;
`;
export const NavProgress = styled.div`
  display: flex;
  align-items: center;

  border-radius: 15px;
  background: var(--gray_bg);
  box-shadow: 0 0 5px -1px rgba(0, 0, 0, 0.4);
  padding: 8px 20px 8px 5px;
  .add__cion__wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 10px;
    background: var(--orange);
    > svg {
      fill: var(--white);
    }
  }
  > span {
    margin-left: 15px;
    display: flex;
    align-items: center;
    > svg {
      margin-right: 5px;
    }
  }
`;
export const AddIcon = styled(Add)`
  width: 25px;
  height: 25px;
`;
export const MoneyIcon = styled(Paid)`
  width: 18px;
  height: 18px;
`;
export const NavUser = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: center;
  padding: 5px 10px;
  border-radius: 10px;
  transition: background 0.3s;
  cursor: pointer;
  position: relative;
  &:hover {
    background: var(--gray_dark);
  }
`;

export const DropDown = styled.div`
  position: absolute;
  top: 60px;
  right: 0;
  border: 1px solid var(--gray);
  width: 200px;
`;
export const DropDownList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;
export const DropDownItem = styled.li`
  width: 100%;
`;
export const DropDownLink = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 19px;
  font-weight: 600;
  padding: 10px 15px;
  &:hover {
    background: #ccc;
  }
`;

const profileIconCSS = css`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

export const UserIcon = styled(PersonOutline)`
  ${profileIconCSS}
`;
export const CoursesIcon = styled(PublishedWithChanges)`
  ${profileIconCSS}
`;
export const LockIcon = styled(Lock)`
  ${profileIconCSS}
`;
