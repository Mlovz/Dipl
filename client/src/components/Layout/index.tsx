import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import { refreshtoken } from "../../redux/actions/authAction";
import Navbar from "../Navbar";
import { Container, Wrapper } from "./style";

const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshtoken());
  }, [dispatch]);

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Wrapper>
    </Container>
  );
};

export default Layout;
