import React, { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { InputChange, RootStore } from "../../utils/TypeScript";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  Container,
  Content,
  ContentBlock,
  RegisterLink,
  LoginForm,
  LoginInput,
  LoginCheckBox,
  LoginButton,
  CheckWrap,
  SpinnerPos,
} from "./style";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/authAction";
import Spinner from "../../components/Spinner";

const Login = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const { auth } = useSelector((state: RootStore) => state);
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Введите только почту")
      .required("Поле почта обязательное"),
    password: yup
      .string()
      .required("Поле пароль обязательное")
      .min(6, "Минимальное количество символов 6"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const handleLogin = (data: any) => {
    if (data) dispatch(login(data, history));
  };

  return (
    <Container>
      <Content>
        <ContentBlock>
          <h1>Вход</h1>
          <p>У вас нет аккаунта Poly?</p>
          <RegisterLink to="/register">Зарегистрируйтесь</RegisterLink>

          <LoginForm onSubmit={handleSubmit(handleLogin)}>
            <LoginInput
              {...register("email")}
              id="email"
              type="text"
              name="email"
              placeholder="Почта или номер телефона"
              className={errors?.email && "error"}
            />

            <strong>{errors?.email?.message}</strong>

            <LoginInput
              {...register("password")}
              id="password"
              type="password"
              name="password"
              placeholder="Пароль"
              className={errors?.password && "error"}
            />
            <strong>{errors?.password?.message}</strong>
            <CheckWrap>
              <LoginCheckBox type="checkbox" id="login" />
              <label htmlFor="login">Запомнить</label>
            </CheckWrap>

            <p>
              Если вы забыли свой пароль, вы можете{" "}
              <Link to="/forgot">сбросить его</Link>
            </p>

            <LoginButton disabled={auth.loading}>
              {auth.loading ? "Loading..." : "Вход"}
            </LoginButton>
          </LoginForm>
          {auth.loading && (
            <SpinnerPos>
              <Spinner />
            </SpinnerPos>
          )}
        </ContentBlock>
      </Content>
    </Container>
  );
};

export default Login;
