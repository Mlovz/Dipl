import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { logout } from "../../../redux/actions/authAction";
import { RootStore } from "../../../utils/TypeScript";
import Avatar from "../../Avatar";
import {
  Container,
  NavLink,
  SchoolIcon,
  HelpIcon,
  BlogIcon,
  NavLogBtn,
  ViewIcon,
  NavProfile,
  NavProgress,
  AddIcon,
  MoneyIcon,
  NavUser,
  ArrowIcon,
  DropDown,
  DropDownList,
  DropDownItem,
  DropDownLink,
  UserIcon,
  CoursesIcon,
  LockIcon,
} from "./style";

const navLinks = [
  {
    display: "Все курсы",
    icon: <ViewIcon />,
    to: "/all_courses",
  },
  {
    display: "Помощь",
    icon: <HelpIcon />,
    to: "/help",
  },
  {
    display: "Блог",
    icon: <BlogIcon />,
    to: "/blog",
  },
];

const NavMenu = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { auth } = useSelector((state: RootStore) => state);
  const [openDrop, setOpenDrop] = useState<boolean>(false);

  const handleDropOpen = () => {
    setOpenDrop(!openDrop);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Container>
      {navLinks.map((item, index) => (
        <NavLink
          key={index}
          to={item.to}
          className={`${item.to === pathname && "active"}`}
        >
          {item.icon}
          <span>{item.display}</span>
        </NavLink>
      ))}
      {auth.token ? (
        <>
          <NavProfile>
            <NavProgress>
              <div className="add__cion__wrap">
                <AddIcon />
              </div>

              <span>
                <MoneyIcon />
                2023
              </span>
            </NavProgress>

            <NavUser onClick={handleDropOpen}>
              <Avatar src={auth.user?.avatar} />
              <ArrowIcon />
              {openDrop && (
                <DropDown>
                  <DropDownList>
                    <DropDownItem>
                      <DropDownLink to="/profile">
                        <UserIcon />
                        Мой профиль
                      </DropDownLink>
                    </DropDownItem>
                    <DropDownItem>
                      <DropDownLink to="/courses">
                        <CoursesIcon />
                        Мои курсы
                      </DropDownLink>
                    </DropDownItem>
                    <DropDownItem onClick={handleLogout}>
                      <DropDownLink to="#">
                        <LockIcon />
                        Выйти
                      </DropDownLink>
                    </DropDownItem>
                  </DropDownList>
                </DropDown>
              )}
            </NavUser>
          </NavProfile>
        </>
      ) : (
        <Link to="/login">
          <NavLogBtn outlined pd={10} bdR={5}>
            Войти
          </NavLogBtn>
        </Link>
      )}
    </Container>
  );
};

export default NavMenu;
