import { Request, Response } from "express";
import Users from "../models/userModel";
import bcrypt from "bcrypt";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../config/generateToken";
import jwt from "jsonwebtoken";
import { IDecodedToken } from "../config/interfase";

const authCtrl = {
  register: async (req: Request, res: Response) => {
    try {
      const { fullname, lastname, username, email, password } = req.body;
      const user = await Users.findOne({ email });
      if (user)
        return res
          .status(400)
          .json({ msg: "Пользователь с такой почтой уже есть!" });

      const hashPassword = await bcrypt.hash(password, 12);
      const newUser = new Users({
        fullname,
        lastname,
        username,
        email,
        password: hashPassword,
      });

      await newUser.save();

      res.json({
        msg: "Регистрация прошла успешно! Можете войти в свой личный кабинет!",
      });
    } catch (err: any) {
      return res.status(500).json({ msg: err.message });
    }
  },
  login: async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      const user = await Users.findOne({ email });
      if (!user)
        return res
          .status(400)
          .json({ msg: "Пользователь с такой почтой нет!" });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ msg: "Неверный пароль!" });

      const access_token = generateAccessToken({ id: user._id });
      const refresh_token = generateRefreshToken({ id: user._id });

      res.cookie("refreshtoken", refresh_token, {
        httpOnly: true,
        path: "/api/refresh_token",
      });

      return res.json({
        msg: "Вошел!",
        access_token,
        user: {
          ...user._doc,
          password: "",
        },
      });
    } catch (err: any) {
      return res.status(500).json({ msg: err.message });
    }
  },
  logout: async (req: Request, res: Response) => {
    try {
      res.clearCookie("refreshtoken", { path: "/api/refresh_token" });
      return res.json({
        msg: "Logged out!",
      });
    } catch (err: any) {
      return res.status(500).json({ msg: err.message });
    }
  },
  refreshToken: async (req: Request, res: Response) => {
    try {
      const token = req.cookies.refreshtoken;

      if (!token) return res.status(400).json({ msg: "Please login now!" });

      const decoded = <IDecodedToken>(
        jwt.verify(token, `${process.env.REFRESH_TOKEN_SECRET}`)
      );
      if (!decoded.id)
        return res.status(400).json({ msg: "Please login now!" });

      const user = await Users.findById({ _id: decoded.id }).select(
        "-password"
      );
      if (!user)
        return res.status(400).json({ msg: "This account does not exist!" });

      const access_token = generateAccessToken({ id: user._id });

      res.json({
        access_token,
        user,
      });
    } catch (err: any) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

export default authCtrl;
